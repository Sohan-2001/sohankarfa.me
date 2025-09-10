"use server";

import { z } from 'zod';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

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

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  });

  const mailgunDomain = 'sandboxb9504cf061744194af9cc5c66705a574.mailgun.org';

  const emailData = {
    from: `Mailgun Sandbox <postmaster@${mailgunDomain}>`,
    to: ['sohan.karfa@gmail.com'],
    subject: `New message from ${name} via portfolio`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
    html: `
      <h3>New Message via Portfolio Contact Form</h3>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    const data = await mg.messages.create(mailgunDomain, emailData);
    console.log(data); // For server-side logging
    return { message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Mailgun Error:', error);
    let errorMessage = 'An unexpected error occurred while sending the email. Please try again later.';
    if (error instanceof Error) {
        errorMessage = `Failed to send email: ${error.message}`;
    }
    return { 
      message: errorMessage,
      errors: {}
    };
  }
}
