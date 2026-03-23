"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Startseite", href: "/" },
    { name: "Lerntherapie", href: "/courses/lerntherapie" },
    { name: "Resilienzkurse", href: "/courses/resilienz" },
    { name: "Kreative Workshops", href: "/courses/kreativ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-input-border/30 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/kt-butterfly-logo.webp" alt="Katharina Tappe Logo" width={60} height={60} className="object-contain" />
          <span className="font-serif text-xl font-bold tracking-wide text-foreground">Katharina Tappe</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-cta ${pathname === link.href ? 'text-cta border-b-2 border-cta pb-1' : 'text-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button>Kontakt aufnehmen</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
