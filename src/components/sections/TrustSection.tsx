import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] w-full rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl">
          <Image
            src="/kt-kitchen-portrait.webp"
            alt="Katharina Tappe"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground mb-6">
            Hallo, ich bin Katharina Tappe.
          </h2>
          <div className="text-lg text-secondary space-y-4 mb-8">
            <p>
              Als erfahrene Lerntherapeutin und Resilienztrainerin begleite ich Menschen auf ihrem Weg zu mehr Selbstvertrauen und persönlichem Erfolg.
            </p>
            <p>
              Mein Ansatz basiert auf Wertschätzung, individueller Förderung und praxiserprobten Methoden, die Freude und Leichtigkeit in den Alltag zurückbringen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
