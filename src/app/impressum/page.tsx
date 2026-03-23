export const metadata = { title: "Impressum | Katharina Tappe" };

export default function ImpressumPage() {
  return (
    <div className="flex flex-col flex-grow bg-background py-24">
      <div className="mx-auto max-w-[800px] w-full px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Impressum</h1>
        <div className="space-y-6 text-secondary leading-relaxed">
          <div>
            <p className="font-bold text-foreground">Angaben gemäß § 5 TMG</p>
            <p>Katharina Tappe<br/>Musterstraße 1<br/>12345 Musterstadt</p>
          </div>
          <div>
            <p className="font-bold text-foreground">Kontakt</p>
            <p>Telefon: +49 (0) 123 44 55 66<br/>E-Mail: kontakt@katharinatappe.de</p>
          </div>
          <div>
            <p className="font-bold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
            <p>Katharina Tappe<br/>Musterstraße 1<br/>12345 Musterstadt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
