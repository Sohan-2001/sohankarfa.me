"use client";

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendMessage, type FormState } from '@/app/actions/send-message';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles } from 'lucide-react';
import { generateMessage } from '@/ai/actions/generate-message';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [purpose, setPurpose] = useState('hiring');

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: "Error",
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
        setMessage('');
        setName('');
      }
    }
  }, [state, toast]);
  
  const handleGenerateMessage = async () => {
    if (!name) {
      toast({
        title: "Error",
        description: "Please enter your name first.",
        variant: 'destructive',
      });
      return;
    }
    setIsGenerating(true);
    try {
      const result = await generateMessage({ purpose, userName: name });
      setMessage(result.message);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to generate message. Please try again.",
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required aria-describedby="name-error" value={name} onChange={(e) => setName(e.target.value)} />
        {state.errors?.name && <p id="name-error" className="text-sm font-medium text-destructive mt-1">{state.errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required aria-describedby="email-error" />
        {state.errors?.email && <p id="email-error" className="text-sm font-medium text-destructive mt-1">{state.errors.email[0]}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="purpose">Purpose</Label>
        <div className="flex gap-2">
          <Select name="purpose" value={purpose} onValueChange={setPurpose}>
            <SelectTrigger id="purpose" className="flex-grow">
              <SelectValue placeholder="Select a purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hiring">Hiring Inquiry</SelectItem>
              <SelectItem value="collaboration">Collaboration Proposal</SelectItem>
              <SelectItem value="feedback">Feedback/Suggestion</SelectItem>
              <SelectItem value="general">General Question</SelectItem>
            </SelectContent>
          </Select>
          <Button type="button" variant="outline" onClick={handleGenerateMessage} disabled={isGenerating}>
            <Sparkles className={`mr-2 h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
            {isGenerating ? 'Generating...' : 'AI Assist'}
          </Button>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          minLength={10} 
          aria-describedby="message-error" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        {state.errors?.message && <p id="message-error" className="text-sm font-medium text-destructive mt-1">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
