"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure plugins are registered only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function FadeIn({ children, delay = 0, className = "", yOffset = 30 }: FadeInProps) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = el.current;
    if (!element) return;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Trigger when top of element is 85% down viewport
          toggleActions: "play none none reverse"
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [delay, yOffset]);

  return (
    <div ref={el} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
