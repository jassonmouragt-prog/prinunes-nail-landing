"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TransitionPhrase() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".transition-phrase",
        { yPercent: 25, opacity: 0, scale: 0.96 },
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="flex min-h-[70vh] items-center justify-center overflow-hidden bg-surface px-5 py-28 md:px-10 md:py-36"
    >
      <div className="max-w-5xl text-center">
        <p className="transition-phrase font-serif-title text-[clamp(2.2rem,6.5vw,4.2rem)] font-medium leading-[1.02] text-text-primary">
          Você não precisa nascer sabendo.
          <br />
          <span className="italic text-gold">Precisa começar da maneira certa.</span>
        </p>
      </div>
    </section>
  );
}