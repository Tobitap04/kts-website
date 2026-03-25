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
    src: "/gallery-1.webp",
    alt: "Kreatives Arbeiten",
    className: "absolute top-[18%] left-[-2%] w-[25vw] max-w-[240px] aspect-[4/5] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 3.5,
  },
  {
    src: "/gallery-2.webp",
    alt: "Kinder malen",
    className: "absolute top-[8%] right-[22%] w-[20vw] max-w-[200px] aspect-square z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 2.2,
  },
  {
    src: "/gallery-3.webp",
    alt: "Glückliches Kind",
    className: "absolute top-[22%] right-[2%] w-[22vw] max-w-[220px] aspect-[3/4] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 4.5,
  },

  // Middle Layer (Scattered around)
  {
    src: "/gallery-4.webp",
    alt: "Langer Tisch",
    className: "absolute top-[0%] left-[18%] w-[20vw] max-w-[220px] aspect-[4/3] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 1.8,
  },
  {
    src: "/gallery-5.webp",
    alt: "Zusammenarbeit",
    className: "absolute top-[40%] right-[18%] w-[18vw] max-w-[190px] aspect-square z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 2.8,
  },
  {
    src: "/gallery-6.webp",
    alt: "Gemeinsam lernen",
    className: "absolute top-[88%] left-[3%] w-[16vw] max-w-[170px] aspect-[4/5] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
    speed: 3.2,
  },

  // Bottom Layer (Positions near the bottom edge)
  {
    src: "/gallery-7.webp",
    alt: "Individuelle Förderung",
    className: "absolute bottom-[-5%] left-[10%] w-[24vw] max-w-[260px] aspect-[3/4] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 4.0,
  },
  {
    src: "/gallery-8.webp",
    alt: "Handwerkliches",
    className: "absolute bottom-[10%] right-[3%] w-[26vw] max-w-[280px] aspect-[4/3] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 3.5,
  },
  {
    src: "/gallery-9.webp",
    alt: "Kreativität",
    className: "absolute bottom-[-22%] right-[18%] w-[18vw] max-w-[200px] aspect-square z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none",
    speed: 5.0,
  },
  {
    src: "/gallery-10.webp",
    alt: "Glücksmomente",
    className: "absolute bottom-[45%] left-[28%] w-[15vw] max-w-[160px] aspect-[4/5] z-0 rounded-2xl shadow-2xl parallax-img opacity-90 pointer-events-none hidden sm:block",
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
