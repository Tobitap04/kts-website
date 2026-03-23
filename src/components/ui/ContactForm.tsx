"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./Button";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("Allgemeine Anfrage");
  const [course, setCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSubject(subjectParam);
    }
    const courseParam = searchParams.get("course");
    if (courseParam) {
      setCourse(courseParam);
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
      course: formData.get("course"),
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
      <div className="flex flex-col items-center justify-center py-12 text-center text-foreground">
        <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl font-bold mb-4">Vielen Dank!</h3>
        <p className="text-foreground/80 text-lg mb-8 max-w-md">
          Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich so schnell wie möglich bei Ihnen melden.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary">Weitere Nachricht senden</Button>
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
        <label htmlFor="course" className="text-sm font-medium text-foreground">Spezifischer Kurs / Workshop</label>
        <select 
          id="course" 
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="h-12 w-full rounded-xl border border-input-border bg-input-bg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent transition-all text-foreground"
        >
          <option value="">Bitte wählen (optional)</option>
          <optgroup label="Lerntherapie">
            <option value="Lese-Rechtschreib-Schwäche (LRS)">Lese-Rechtschreib-Schwäche (LRS)</option>
            <option value="Rechenschwäche (Dyskalkulie)">Rechenschwäche (Dyskalkulie)</option>
            <option value="Lernblockaden & Motivation">Lernblockaden & Motivation</option>
          </optgroup>
          <optgroup label="Resilienzkurse">
            <option value="Stark durch den Alltag (8-10 Jahre)">Stark durch den Alltag (8-10 Jahre)</option>
            <option value="Mindset Matters (11-14 Jahre)">Mindset Matters (11-14 Jahre)</option>
            <option value="Prüfungsangst überwinden">Prüfungsangst überwinden</option>
          </optgroup>
          <optgroup label="Kreative Workshops">
            <option value="Farbspiel & Fantasie">Farbspiel & Fantasie</option>
            <option value="Journaling Werkstatt">Journaling Werkstatt</option>
          </optgroup>
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
