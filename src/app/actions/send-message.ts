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
  
  // The Flask API will receive this data and is responsible for sending the email.
  const emailPayload = {
    name: name,
    email: email, // The sender's email from the form
    message: message,
    recipient_email: 'sohan.karfa@gmail.com' // The fixed recipient
  };

  try {
    const response = await fetch('https://sarma.pythonanywhere.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const result = await response.json();

    if (response.ok && result.success === 1) {
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
    return { 
      message: 'An unexpected error occurred. Please try again later.',
      errors: {}
    };
  }
}
