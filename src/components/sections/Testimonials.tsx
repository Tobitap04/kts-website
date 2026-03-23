import { Card, CardContent } from "../ui/Card";

const testimonials = [
  {
    quote: "Dank Katharina geht mein Sohn endlich wieder gerne zur Schule. Der Leistungsdruck ist spürbar gewichen.",
    name: "Julia M.",
    role: "Mutter eines 12-Jährigen"
  },
  {
    quote: "Die Resilienzkurse haben unserer Tochter so viel Selbstvertrauen gegeben. Sie blüht richtig auf!",
    name: "Thomas S.",
    role: "Vater einer 14-Jährigen"
  }
];

export function Testimonials() {
  return (
    <section className="bg-section-alt py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground mb-4">
            Stimmen von Eltern
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-background text-foreground shadow-sm">
              <CardContent>
                <p className="italic text-lg mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="font-medium text-cta">{t.name}</div>
                <div className="text-sm text-secondary">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
