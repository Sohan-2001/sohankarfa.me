"use server";

import { z } from 'zod';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/contact-email-template';

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

const resend = new Resend(process.env.RESEND_API_KEY);

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

  try {
    const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>',
        to: 'sohan.karfa@gmail.com',
        subject: `New message from ${name} via portfolio`,
        reply_to: email,
        react: ContactEmailTemplate({ name, email, message })
    });

    if (error) {
        console.error('Resend API error:', error);
        return {
            message: 'Failed to send email. Please try again later.',
            errors: {},
        };
    }

    return { message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      message: 'An unexpected error occurred. Please try again later.',
      errors: {}
    };
  }
}
