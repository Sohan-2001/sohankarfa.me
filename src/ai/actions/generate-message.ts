'use server';
/**
 * @fileOverview A flow for generating contact message templates.
 *
 * - generateMessage - A function that handles the message generation process.
 * - GenerateMessageInput - The input type for the generateMessage function.
 * - GenerateMessageOutput - The return type for the generateMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMessageInputSchema = z.object({
  purpose: z.string().describe("The purpose of the message (e.g., 'hiring', 'collaboration', 'general')."),
  userName: z.string().describe("The name of the person who is sending the message."),
});
export type GenerateMessageInput = z.infer<typeof GenerateMessageInputSchema>;

const GenerateMessageOutputSchema = z.object({
  message: z.string().describe("The generated message content."),
});
export type GenerateMessageOutput = z.infer<typeof GenerateMessageOutputSchema>;

export async function generateMessage(input: GenerateMessageInput): Promise<GenerateMessageOutput> {
  return generateMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMessagePrompt',
  input: {schema: GenerateMessageInputSchema},
  output: {schema: GenerateMessageOutputSchema},
  prompt: `You are a helpful assistant for a user named '{{userName}}' who wants to contact a full-stack developer named Sohan Karfa.
Your task is to generate a professional and friendly contact message.

The user's purpose for contacting is: '{{purpose}}'.

Based on the purpose, generate a suitable message.

- If the purpose is 'hiring', the message should be from a recruiter or hiring manager expressing interest in Sohan's profile for a potential role. Mention his skills in full-stack development.
- If the purpose is 'collaboration', the message should propose a project or idea for collaboration.
- If the purpose is 'feedback', the message should provide some constructive feedback on one of his projects.
- If the purpose is 'general', create a friendly message asking a general question.

The message should be concise, professional, and courteous. Start with a greeting like "Hi Sohan," and end with a closing like "Best regards,\n{{userName}}".

Do not include any placeholders like "[Your Company Name]" or "[Project Idea]". Generate a complete, ready-to-use message.
`,
});

const generateMessageFlow = ai.defineFlow(
  {
    name: 'generateMessageFlow',
    inputSchema: GenerateMessageInputSchema,
    outputSchema: GenerateMessageOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
