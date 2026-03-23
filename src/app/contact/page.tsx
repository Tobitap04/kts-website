import { ContactForm } from "@/components/ui/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Kontakt | Katharina Tappe",
  description: "Nehmen Sie Kontakt mit Katharina Tappe auf für ein kostenloses Erstgespräch.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-grow bg-background py-24 border-t border-primary/10">
      <div className="mx-auto max-w-[800px] w-full px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground mb-4">Kontaktieren Sie mich</h1>
            <p className="text-foreground/80 text-lg">Ich freue mich darauf, Sie kennenzulernen. Schreiben Sie mir für ein kostenloses Erstgespräch.</p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="bg-section-alt rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
