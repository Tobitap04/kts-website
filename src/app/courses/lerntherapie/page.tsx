import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent } from "../../../components/ui/Card";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "../../../components/ui/FadeIn";

export const metadata = {
  title: "Lerntherapie | Katharina Tappe",
  description: "Gezielte Lerntherapie bei LRS, Dyskalkulie und Lernblockaden. Unterstützung für eine positive Lernentwicklung.",
};

const offerings = [
  { title: "Lese-Rechtschreib-Schwäche (LRS)", age: "Alle Altersgruppen", duration: "Termin nach Absprache", desc: "Strukturierte Förderung zum Aufbau von Lese- und Rechtschreibkompetenzen mit modernen Methoden." },
  { title: "Rechenschwäche (Dyskalkulie)", age: "Alle Altersgruppen", duration: "Termin nach Absprache", desc: "Grundlagen der Mathematik spielerisch und anschaulich erarbeiten für ein sicheres Mengenverständnis." },
  { title: "Lernblockaden & Prüfungsangst", age: "Alle Altersgruppen", duration: "Termin nach Absprache", desc: "Abbau von Prüfungsängsten, Schulfrust und Blockaden durch gezielte therapeutische Interventionen." }
];

export default function LerntherapiePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-background pt-24 pb-24 border-b border-primary/20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">Lerntherapie: Mit Freude lernen</h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8">Maßgeschneiderte therapeutische Unterstützung, um Lese-Rechtschreib-Schwäche (LRS), Dyskalkulie und Lernblockaden erfolgreich zu überwinden.</p>
            <Link href="/contact?subject=Kostenloses+Erstgespräch"><Button size="lg">Kostenloses Erstgespräch</Button></Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
              <Image src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" alt="Lerntherapie Kind" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-16">Therapeutische Angebote</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offerings.map((offering, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <Card className="bg-card text-foreground hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 border-none h-full">
                  <CardContent className="h-full flex flex-col">
                    <h3 className="font-serif text-xl font-bold mb-3 text-background">{offering.title}</h3>
                    <div className="text-sm font-medium text-background/80 mb-4 border-b border-background/20 pb-2 text-left">
                      <span>{offering.duration}</span>
                    </div>
                    <p className="text-background/90 mb-8 flex-grow leading-relaxed">{offering.desc}</p>
                    <Link href={`/contact?subject=Lerntherapie&course=${encodeURIComponent(offering.title)}`} className="mt-auto block">
                      <Button variant="secondary" className="w-full text-foreground bg-background hover:bg-background/90 border-none">Details anfragen</Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Warum Lerntherapie?</h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">Wenn das Lernen dauerhaft schwerfällt und das Selbstbewusstsein leidet, hilft Nachhilfe oft nicht mehr weiter. Lerntherapie setzt an den Ursachen an und baut grundlegendes Verständnis sowie Selbstvertrauen wieder auf.</p>
            <ul className="space-y-5">
              {["Diagnostikgeleitete Förderung bei LRS & Dyskalkulie", "Aufbau von Selbstvertrauen und Lernmotivation", "Individuelles Lerntempo ohne Leistungsdruck", "Enge Zusammenarbeit mit Eltern und Schulen"].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-foreground font-medium text-lg">
                  <CheckCircleIcon className="w-7 h-7 text-primary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-section-alt rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-sm h-full">
               <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Starten Sie jetzt</h3>
               <p className="mb-8 text-foreground/80 text-lg">Ein Erstgespräch ist unverbindlich und kostenlos. Lassen Sie uns gemeinsam den besten Weg finden.</p>
               <Link href="/contact?subject=Kostenloses+Erstgespräch"><Button size="lg">Termin vereinbaren</Button></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
