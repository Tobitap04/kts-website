export function FAQ() {
  const faqs = [
    {
      question: "Für welches Alter sind die Kurse geeignet?",
      answer: "Meine Angebote richten sich an Menschen jeden Alters. Bis auf die Lerntherapie, die speziell für Kinder und Jugendliche konzipiert ist, sind alle anderen Angebote für jedes Alter geeignet."
    },
    {
      question: "Wie läuft eine Lerntherapie ab?",
      answer: "In einem kostenlosen Erstgespräch klären wir die Bedürfnisse. Danach finden regelmäßige Einzelsitzungen statt, in denen wir individuelle Strategien erarbeiten."
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "In der Regel handelt es sich um Selbstzahlerleistungen, da es präventive pädagogische Angebote sind."
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground mb-12 text-center">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-input-border pb-6">
              <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{faq.question}</h3>
              <p className="text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
