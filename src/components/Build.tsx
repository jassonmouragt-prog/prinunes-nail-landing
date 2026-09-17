"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BUILD_SECTIONS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function Build() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".build-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".build-headline",
            start: "top 80%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".build-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-background-deep py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="build-headline max-w-3xl">
          <SectionLabel>O que você vai construir</SectionLabel>
          <h2 className="font-serif-title mt-4 text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
            Mais do que aprender técnicas.{" "}
            <span className="italic text-gold">
              Construir uma nova versão profissional de você.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {BUILD_SECTIONS.map((item) => (
            <div
              key={item.num}
              className="build-item glass glass-hover group relative rounded-[24px] p-8 md:rounded-[28px] md:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="font-[var(--font-manrope)] text-[12px] font-light tracking-[0.1em] text-accent">
                  {item.num}
                </span>
                <span className="h-px w-8 bg-border-subtle transition-all duration-700 group-hover:w-16 group-hover:bg-accent/60" />
              </div>
              <h3 className="font-serif-title mt-20 text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-[1.0] text-text-primary md:mt-28">
                {item.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.6] text-text-secondary">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}