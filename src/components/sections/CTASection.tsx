import Link from "next/link";
import { Button } from "../ui/Button";

export function CTASection() {
  return (
    <section className="bg-section-alt py-24 sm:py-32 text-center">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold tracking-tight mb-6 text-foreground">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-foreground/80 leading-relaxed">
          Lassen Sie uns gemeinsam herausfinden, wie ich Sie oder Ihr Kind bestmöglich unterstützen kann.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-cta text-background hover:bg-cta-hover border-none">
            Kostenloses Erstgespräch anfragen
          </Button>
        </Link>
      </div>
    </section>
  );
}
