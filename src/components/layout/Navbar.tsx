"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", href: "/" },
    { name: "Lerntherapie", href: "/courses/lerntherapie" },
    { name: "Resilienzkurse", href: "/courses/resilienz" },
    { name: "Kreative Workshops", href: "/courses/kreativ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-input-border/30 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <Image src="/kt-butterfly-logo.webp" alt="Katharina Tappe Logo" width={60} height={60} className="object-contain transition-transform group-hover:scale-105" />
          <span className="font-serif text-xl font-bold tracking-wide text-foreground group-hover:text-cta transition-colors">Katharina Tappe</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-cta-hover ${pathname === link.href ? 'text-cta border-b-2 border-cta pb-1' : 'text-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button>Kontakt aufnehmen</Button>
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-input-border/30 shadow-lg p-4 flex flex-col gap-4 z-40">
          <nav className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-cta-hover ${pathname === link.href ? 'text-cta font-bold' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full">Kontakt aufnehmen</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
