import Image from "next/image";
import Link from "next/link";
import { getUpcomingWorkshops } from "@/lib/calendar";
import { Button } from "../../../components/ui/Button";
import { Card, CardContent } from "../../../components/ui/Card";
import { FadeIn } from "../../../components/ui/FadeIn";

export const metadata = {
  title: "Kreative Workshops | Katharina Tappe",
  description: "Raum für kreative Entfaltung ohne Leistungsdruck. Entdecke meine kreativen Workshops.",
};

export const revalidate = 300;

export default async function KreativPage() {
  const upcomingOfferings = await getUpcomingWorkshops();

  return (
    <div className="flex flex-col">
      <section className="relative bg-background pt-24 pb-24 border-b border-primary/20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground mb-6">Raum für Entfaltung</h1>
            <p className="text-xl text-foreground/80 mb-8">In den kreativen Workshops steht das Ausprobieren im Vordergrund. Ohne Bewertung und Leistungsdruck können Teilnehmer ihre Talente frei entdecken und ausleben.</p>
            <Link href="/contact"><Button size="lg">Workshop anfragen</Button></Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay"></div>
              <Image src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop" alt="Kreative Workshops" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-16">Kommende Termine</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingOfferings.length > 0 ? upcomingOfferings.map((offering, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <Card className="bg-card text-foreground hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 border-none h-full">
                  <CardContent className="h-full flex flex-col">
                    <h3 className="font-serif text-xl font-bold mb-3 text-background">{offering.title}</h3>
                    <div className="text-sm font-medium text-background/80 mb-4 flex gap-3 border-b border-background/20 pb-2 text-left items-center">
                      <span>{offering.dateDisplay}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-background/50"></span>
                      <span>{offering.duration}</span>
                    </div>
                    <p className="text-background/90 mb-8 flex-grow leading-relaxed">{offering.desc}</p>
                    <Link href={`/contact?subject=Kreativer Workshop&course=${encodeURIComponent(offering.title)}`} className="mt-auto block">
                      <Button variant="secondary" className="w-full text-foreground bg-background hover:bg-background/90 border-none">Anmelden</Button>
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            )) : (
              <div className="col-span-1 md:col-span-2 text-center py-12 px-6 rounded-2xl bg-background/50 border border-primary/10">
                <p className="text-xl text-foreground font-medium mb-4">Momentan sind keine neuen Termine geplant.</p>
                <p className="text-foreground/70 mb-8">Schau bald wieder vorbei oder schreib mir eine Nachricht, wenn du Interesse an einem Workshop hast!</p>
                <Link href="/contact">
                  <Button variant="secondary">Nachricht senden</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
