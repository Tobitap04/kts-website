"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-secondary mb-8 text-lg">Ich werde mich zeitnah bei Ihnen melden.</p>
        <Button onClick={() => setSubmitted(false)}>Weitere Nachricht senden</Button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Name (Elternteil)</label>
          <input type="text" id="name" required className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">E-Mail</label>
          <input type="email" id="email" required className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all" />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">Interesse an</label>
        <select id="subject" className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all text-foreground">
          <option>Lerntherapie</option>
          <option>Resilienzkurs</option>
          <option>Kreativer Workshop</option>
          <option>Allgemeine Anfrage</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Ihre Nachricht</label>
        <textarea id="message" required rows={5} className="w-full rounded-xl border border-input-border bg-input-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all text-foreground"></textarea>
      </div>
      
      <Button size="lg" className="mt-4 w-full sm:w-auto self-start">Anfrage absenden</Button>
    </form>
  );
}
