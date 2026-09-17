"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NotFor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".notfor-text",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="border-y border-border-subtle bg-surface px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center md:gap-6">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-accent">
          <span className="h-px w-8 bg-accent/50" />
          <span>{"// Não é para você se…"}</span>
          <span className="h-px w-8 bg-accent/50" />
        </div>
        <p className="notfor-text font-[var(--font-manrope)] text-[clamp(1.25rem,3vw,1.9rem)] font-normal leading-[1.45] tracking-[-0.01em] text-text-primary">
          …você procura resultado sem praticar. Essa formação exige dedicação —
          assim como qualquer profissão que merece ser levada a sério.
        </p>
      </div>
    </section>
  );
}