import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-cta text-cta-text py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <span className="font-serif text-3xl font-bold block mb-4 text-background">Katharina Tappe</span>
          <p className="opacity-80 max-w-sm text-background mt-4 leading-relaxed">
            Professionelle Unterstützung für Kinder und Jugendliche. Lerntherapie, Resilienzkurse und kreative Workshops für mehr Leichtigkeit im Alltag.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl text-background mb-2">Angebote</h3>
          <Link href="/courses/lerntherapie" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Lerntherapie</Link>
          <Link href="/courses/resilienz" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Resilienzkurse</Link>
          <Link href="/courses/kreativ" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Kreative Workshops</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-xl text-background mb-2">Rechtliches</h3>
          <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Kontakt</Link>
          <Link href="/impressum" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Impressum</Link>
          <Link href="/datenschutz" className="opacity-80 hover:opacity-100 transition-opacity text-sm">Datenschutz</Link>
          <Link href="/agb" className="opacity-80 hover:opacity-100 transition-opacity text-sm">AGB</Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-background/20 opacity-60 text-xs text-center text-background">
        © {new Date().getFullYear()} Katharina Tappe. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
