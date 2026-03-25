import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent } from "../../../components/ui/Card";
import { FadeIn } from "../../../components/ui/FadeIn";

export const metadata = {
  title: "Resilienzkurse | Katharina Tappe",
  description: "Resilienzkurse zur Stärkung der seelischen Widerstandskraft. Innere Stärke aufbauen, um Herausforderungen selbstbewusst zu meistern.",
};

const offerings = [
  { title: "Löwenstark!", duration: "Termin nach Absprache", desc: "Spielerisch Selbstvertrauen aufbauen und mutig neue Situationen meistern." },
  { title: "Stress-Achtsamkeit", duration: "Termin nach Absprache", desc: "Umgang mit Schulstress, Leistungsdruck und allgemeinen Herausforderungen." },
  { title: "Eltern-Kind-Workshop", duration: "Termin nach Absprache", desc: "Gemeinsam Ressourcen entdecken und den Familienalltag stärken." }
];

export default function ResilienzPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-background pt-24 pb-24 border-b border-primary/20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">Innere Stärke aufbauen</h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8">Meine Resilienzkurse helfen dabei, mit den Herausforderungen des Alltags gesund umzugehen und echtes Selbstvertrauen zu entwickeln.</p>
            <Link href="/contact"><Button size="lg">Kurs anfragen</Button></Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
              <Image src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" alt="Resilienz Kind" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-16">Aktuelle Kurse</h2>
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
                    <Link href={`/contact?subject=Resilienzkurs&course=${encodeURIComponent(offering.title)}`} className="mt-auto block">
                      <Button variant="secondary" className="w-full text-foreground bg-background hover:bg-background/90 border-none">Details anfragen</Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
