"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./Button";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("Allgemeine Anfrage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSubject(subjectParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ein Fehler ist aufgetreten.");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Leider gab es ein Problem beim Senden. Bitte versuchen Sie es später noch einmal.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
      {error && (
        <div className="p-4 bg-red-100/50 text-red-800 rounded-xl text-sm mb-2">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
          <input type="text" id="name" name="name" required className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">E-Mail</label>
          <input type="email" id="email" name="email" required className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all" />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">Interesse an</label>
        <select 
          id="subject" 
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all text-foreground"
        >
          <option value="Lerntherapie">Lerntherapie</option>
          <option value="Resilienzkurs">Resilienzkurs</option>
          <option value="Kreativer Workshop">Kreativer Workshop</option>
          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Ihre Nachricht</label>
        <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-input-border bg-input-bg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all text-foreground"></textarea>
      </div>
      
      <Button size="lg" className="mt-4 w-full sm:w-auto self-start" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
      </Button>
    </form>
  );
}
