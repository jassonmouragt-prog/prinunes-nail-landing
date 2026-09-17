"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PremiumButton } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactPhrase() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".impact-line",
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".impact-cta",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-surface px-5 py-28 text-center md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(38,96,168,0.28), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <p className="impact-line overflow-hidden font-serif-title text-[clamp(2rem,6vw,4.2rem)] font-medium leading-[1.02]">
          Toda profissional que você admira também teve um
          <span className="italic text-gold"> primeiro atendimento.</span>
        </p>

        <p className="impact-line mt-6 text-[clamp(1.3rem,3.5vw,2rem)] font-light text-text-secondary">
          A diferença é que ela começou.
        </p>

        <div className="impact-cta mt-8">
          <PremiumButton>Começar minha jornada</PremiumButton>
        </div>
      </div>
    </section>
  );
}