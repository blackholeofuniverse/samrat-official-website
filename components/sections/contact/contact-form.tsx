"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import type { FormEvent } from "react";

// Define types for our Formspree state
interface FormspreeState {
  submitting: boolean;
  succeeded?: boolean;
  errors?: any | null;
}

// Props type for our form content
interface FormContentProps {
  state: FormspreeState;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

// Type for our dynamic component
type FormspreeComponent = () => JSX.Element;

const FormSkeleton = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="h-12 bg-secondary/50 rounded-md animate-pulse" />
      <div className="h-12 bg-secondary/50 rounded-md animate-pulse" />
    </div>
    <div className="min-h-[200px] bg-secondary/50 rounded-md animate-pulse" />
    <div className="h-12 bg-secondary/50 rounded-md animate-pulse" />
  </div>
);

const FormContent = ({ state, handleSubmit }: FormContentProps) => {
  const { toast } = useToast();

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Your name"
          className="bg-secondary/50 border-primary/20 focus:border-primary h-12"
          name="name"
          required
          disabled={state.submitting}
        />
        <Input
          type="email"
          placeholder="Your email"
          className="bg-secondary/50 border-primary/20 focus:border-primary h-12"
          name="email"
          required
          disabled={state.submitting}
        />
      </div>
      <Textarea
        placeholder="Your message"
        className="min-h-[200px] bg-secondary/50 border-primary/20 focus:border-primary resize-none"
        name="message"
        required
        disabled={state.submitting}
      />
      <Button
        type="submit"
        className="w-full bg-white hover:bg-white/90 text-black font-semibold h-12 text-lg"
        disabled={state.submitting}
      >
        {state.submitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export function ContactForm() {
  const [DynamicForm, setDynamicForm] = useState<FormspreeComponent | null>(null);

  useEffect(() => {
    const loadFormspree = async () => {
      try {
        const formspree = await import('@formspree/react');
        const FormComponent = () => {
          const [state, handleSubmit] = formspree.useForm("mpwwaqed");
          return <FormContent state={state} handleSubmit={handleSubmit} />;
        };
        setDynamicForm(() => FormComponent);
      } catch (error) {
        console.error('Error loading Formspree:', error);
      }
    };

    loadFormspree();
  }, []);

  if (!DynamicForm) {
    return <FormSkeleton />;
  }

  return <DynamicForm />;
}