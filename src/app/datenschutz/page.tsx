export const metadata = { title: "Datenschutzerklärung | Katharina Tappe" };

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col flex-grow bg-background py-24">
      <div className="mx-auto max-w-[800px] w-full px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>
        <div className="space-y-6 text-secondary leading-relaxed">
          <h2 className="font-serif text-2xl font-bold text-foreground mt-8">1. Datenschutz auf einen Blick</h2>
          <p>Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          
          <h2 className="font-serif text-2xl font-bold text-foreground mt-8">2. Datenerfassung auf dieser Website</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          
          <h2 className="font-serif text-2xl font-bold text-foreground mt-8">3. Kontaktformular</h2>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        </div>
      </div>
    </div>
  );
}
