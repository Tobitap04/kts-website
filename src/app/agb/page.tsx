export const metadata = { title: "AGB | Katharina Tappe" };

export default function AGBPage() {
  return (
    <div className="flex flex-col flex-grow bg-background py-24">
      <div className="mx-auto max-w-[800px] w-full px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Allgemeine Geschäftsbedingungen</h1>
        <div className="space-y-6 text-secondary leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-foreground mt-8">§1 Geltungsbereich</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Teilnahme an Coachings, Kursen und Workshops von Katharina Tappe.</p>
          
          <h2 className="font-serif text-2xl font-bold text-foreground mt-8">§2 Anmeldung und Vertragsschluss</h2>
          <p>Die Anmeldung zu Kursen und Workshops erfolgt schriftlich über das Kontaktformular oder per E-Mail. Der Vertrag kommt mit der Bestätigung durch Katharina Tappe zustande.</p>
          
          <h2 className="font-serif text-2xl font-bold text-foreground mt-8">§3 Zahlungsbedingungen</h2>
          <p>Die Gebühren für Coachings und Kurse sind nach Rechnungserhalt ohne Abzug fällig, sofern keine individuellen Zahlungsvereinbarungen getroffen wurden.</p>
        </div>
      </div>
    </div>
  );
}
