import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground lg:text-6xl mb-6">
            Lerntherapie für Kinder und Jugendliche
          </h1>
          <p className="text-base sm:text-lg text-secondary mb-8 leading-relaxed">
            Mit Freude und Leichtigkeit zum Ziel. Maßgeschneiderte Strategien, um Prüfungsstress abzubauen und das eigene Potenzial voll zu entfalten.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Jetzt Kontakt aufnehmen</Button>
            </Link>
            <Link href="/courses/lerntherapie">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Mehr erfahren</Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] w-full lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
          <Image 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
            alt="Kinder beim intuitiven Lernen" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover" 
            priority
          />
        </div>
      </div>
    </section>
  );
}
