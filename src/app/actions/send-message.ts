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

  // Here you would typically send an email or save to a database.
  // For demonstration, we'll just log the data to the console.
  console.log('New message received:');
  console.log(validatedFields.data);

  return { message: 'Your message has been sent successfully!' };
}
