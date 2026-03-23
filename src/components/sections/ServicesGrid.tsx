import { Card, CardContent } from "../ui/Card";
import { BookOpenIcon, HeartIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../ui/Button";

const services = [
  {
    title: "Lerntherapie",
    description: "Individuelle therapeutische Strategien exklusiv für Kinder und Jugendliche bei LRS, Dyskalkulie oder Lernblockaden.",
    icon: BookOpenIcon,
    href: "/courses/lerntherapie"
  },
  {
    title: "Resilienzkurse",
    description: "Innere Stärke aufbauen, um mit den Herausforderungen des Alltags gesund und mutig umzugehen.",
    icon: HeartIcon,
    href: "/courses/resilienz"
  },
  {
    title: "Kreative Workshops",
    description: "Raum zur freien Entfaltung fernab vom Leistungsdruck. Regelmäßige Termine mit spezifischen Themen.",
    icon: SparklesIcon,
    href: "/courses/kreativ"
  }
];

export function ServicesGrid() {
  return (
    <section className="bg-section-alt py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground mb-4">
            Meine Angebote
          </h2>
          <p className="text-foreground/80 text-lg">
            Entdecken Sie unsere Programme. Lerntherapie für Kinder und Jugendliche sowie Resilienz- und Kreativworkshops.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 bg-card">
              <CardContent className="flex flex-col flex-grow items-start text-left">
                <div className="p-3 bg-background rounded-xl mb-6 shadow-sm">
                  <service.icon className="w-8 h-8 text-cta" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-background">{service.title}</h3>
                <p className="text-background/90 mb-8 flex-grow">
                  {service.description}
                </p>
                <Link href={service.href} className="w-full mt-auto">
                  <Button variant="secondary" className="w-full text-foreground bg-background hover:bg-background/90 border-none">
                    Details ansehen
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
