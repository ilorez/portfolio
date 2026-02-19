'use client';

import React, { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactCard() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setState('sending');
    setErrorMessage('');

    const formData = new FormData(form);
    const payload = {
      name: (formData.get('name') as string)?.trim() || '',
      email: (formData.get('email') as string)?.trim() || '',
      subject: (formData.get('subject') as string)?.trim() || 'Message from portfolio',
      message: (formData.get('message') as string)?.trim() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setState('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <Card
      className={[
        'w-full max-w-[560px] transition-all duration-200',
        'bg-card border border-border/50 shadow-lg',
        'hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/30',
      ].join(' ')}
    >
      <CardHeader className="space-y-1.5">
        <CardTitle className="text-xl">Get in touch</CardTitle>
        <CardDescription>
          Send a message and I&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state === 'success' ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
            <p className="text-lg font-medium text-foreground">Message sent</p>
            <p className="text-sm text-muted-foreground">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => setState('idle')}
              className="mt-2"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-5"
          >
            {state === 'error' && (
              <div
                className="flex items-center gap-2 rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive"
                role="alert"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMessage}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                autoComplete="name"
                className="bg-background"
                disabled={state === 'sending'}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="bg-background"
                disabled={state === 'sending'}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="e.g. Project inquiry"
                autoComplete="off"
                className="bg-background"
                disabled={state === 'sending'}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                rows={5}
                required
                className="bg-background min-h-[120px]"
                disabled={state === 'sending'}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="gap-2"
              disabled={state === 'sending'}
            >
              {state === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
