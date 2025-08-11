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
  const recipientEmail = 'sohan.karfa@gmail.com';
  const emailBody = `You received a new message from ${name} (${email}):\n\n${message}`;

  try {
    const response = await fetch('https://sarma.pythonanywhere.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: recipientEmail,
        message: emailBody,
        sender_email: email, // Passing user's email as sender
      }),
    });

    const result = await response.json();

    if (result.success === 1) {
      return { message: 'Your message has been sent successfully!' };
    } else {
      console.error('API Error:', result.error);
      return { 
        message: `Failed to send email: ${result.error || 'Unknown error'}`,
        errors: {}
      };
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      message: 'An unexpected error occurred. Please try again later.',
      errors: {}
    };
  }
}
