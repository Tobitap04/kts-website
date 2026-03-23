import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] w-full rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
            alt="Katharina Tappe" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground mb-6">
            Hallo, ich bin Katharina Tappe.
          </h2>
          <div className="text-lg text-secondary space-y-4 mb-8">
            <p>
              Als erfahrene Lerncoachin und Resilienztrainerin begleite ich Kinder und Jugendliche auf ihrem Weg zu mehr Selbstvertrauen und schulischem Erfolg.
            </p>
            <p>
              Mein Ansatz basiert auf Wertschätzung, individueller Förderung und praxiserprobten Methoden, die den Spaß am Lernen zurückbringen.
            </p>
          </div>
          <Link href="/about">
            <Button variant="secondary">Mehr über mich erfahren</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
