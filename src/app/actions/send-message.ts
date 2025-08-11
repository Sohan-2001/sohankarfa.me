"use server";

import { z } from 'zod';

const schema = z.object({
  name: z.string({ required_error: 'Name is required.' }).min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string({ required_error: 'Email is required.' }).email({ message: 'Please enter a valid email.' }),
  message: z.string({ required_error: 'Message is required.' }).min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function sendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;
  
  // Construct the message body to include sender's info
  const fullMessage = `
    New message from: ${name}
    Sender's Email: ${email}
    
    Message:
    ${message}
  `;
  
  // The Flask API will receive this data and is responsible for sending the email.
  const emailPayload = {
    email: 'sohan.karfa@gmail.com', // The fixed recipient
    message: fullMessage,
  };

  try {
    const response = await fetch('https://sarma.pythonanywhere.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
        const errorResult = await response.json().catch(() => ({ error: 'Unknown API error' }));
        console.error('API Error Response:', errorResult);
        return { 
          message: `Failed to send email. API returned status ${response.status}: ${errorResult.error || 'Unknown error'}`,
          errors: {}
        };
    }

    const result = await response.json();

    if (result.success === 1) {
      return { message: 'Your message has been sent successfully!' };
    } else {
      console.error('API Error Response:', result);
      return { 
        message: `Failed to send email: ${result.error || 'Unknown error from API'}`,
        errors: {}
      };
    }
  } catch (error) {
    console.error('Fetch API Error:', error);
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return { 
      message: errorMessage,
      errors: {}
    };
  }
}
