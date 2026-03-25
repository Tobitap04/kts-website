"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  // Left side - Spread more horizontally and moved down
  {
    src: "https://images.unsplash.com/photo-1544772711-57da9c7368fa?q=80&w=1200&auto=format&fit=crop",
    alt: "Kreatives Arbeiten",
    className: "absolute top-[18%] left-[-2%] w-[25vw] max-w-[240px] aspect-[4/5] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 3.5,
  },
  {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop",
    alt: "Kinder malen",
    className: "absolute top-[8%] right-[22%] w-[20vw] max-w-[200px] aspect-square z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 2.2,
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop",
    alt: "Glückliches Kind",
    className: "absolute top-[22%] right-[2%] w-[22vw] max-w-[220px] aspect-[3/4] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 4.5,
  },

  // Middle Layer (Scattered around)
  {
    src: "https://images.unsplash.com/photo-1766932901295-d4185660341b?q=80&w=800&auto=format&fit=crop",
    alt: "Langer Tisch mit vielen Leuten",
    className: "absolute top-[0%] left-[18%] w-[20vw] max-w-[220px] aspect-[4/3] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 1.8,
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
    alt: "Vier Leute + Cafe",
    className: "absolute top-[40%] right-[15%] w-[18vw] max-w-[190px] aspect-square z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 2.8,
  },
  {
    src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
    alt: "Kinder mit Ball",
    className: "absolute top-[88%] left-[0%] w-[16vw] max-w-[170px] aspect-[4/5] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 3.2,
  },

  // Bottom Layer (Positions near the bottom edge)
  {
    src: "https://images.unsplash.com/photo-1675917222721-a633aa25c281?q=80&w=1200&auto=format&fit=crop",
    alt: "Kind beim Malen helfen",
    className: "absolute bottom-[-5%] left-[8%] w-[24vw] max-w-[260px] aspect-[3/4] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 4.0,
  },
  {
    src: "https://images.unsplash.com/photo-1759646828783-7e1b8f02f89b?q=80&w=800&auto=format&fit=crop",
    alt: "Hände am Topf",
    className: "absolute bottom-[10%] right-[3%] w-[26vw] max-w-[280px] aspect-[4/3] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 3.5,
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
    alt: "Konfetti",
    className: "absolute bottom-[-22%] right-[18%] w-[18vw] max-w-[200px] aspect-square z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 5.0,
  },
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop",
    alt: "Leute vor Sonnenuntergang",
    className: "absolute bottom-[40%] left-[28%] w-[15vw] max-w-[160px] aspect-[4/5] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 2.0,
  }
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const parallaxImages = gsap.utils.toArray<HTMLElement>('.parallax-img');

      parallaxImages.forEach((img) => {
        const speed = Number(img.dataset.speed || 1);

        gsap.to(img, {
          yPercent: -40 * speed, // Move image up noticeably faster
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-foreground text-background py-32 md:py-48 lg:py-64 flex flex-col items-center justify-center min-h-[100vh] xl:min-h-[120vh]"
    >
      {/* Parallax Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={img.className}
          data-speed={img.speed}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
            className="object-cover rounded-2xl"
          />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#FAF7EA]">
          Einblicke in meine Kurse
        </h2>

        <p className="text-lg md:text-xl text-[#FAF7EA]/80 leading-relaxed max-w-xl">
          Jeder Kurs ist einzigartig. Entdecke die kreative, stärkende und wertschätzende Atmosphäre meines Angebots – ein Raum für Wachstum, Freude und Leichtigkeit.
        </p>
      </div>
    </section>
  );
}
