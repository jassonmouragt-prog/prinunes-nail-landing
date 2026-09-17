"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AUDIENCE_LIST } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function Audience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".audience-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".audience-headline",
            start: "top 80%",
          },
        }
      );

      const mm = gsap.matchMedia();
      const items = gsap.utils.toArray(".audience-item") as HTMLElement[];

      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
            },
          }
        );
      });

      mm.add("(max-width: 1023px)", () => {
        items.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 70%",
              },
            }
          );
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="para-quem"
      className="relative bg-background-deep py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="audience-headline max-w-3xl">
          <SectionLabel>Para quem é</SectionLabel>
          <h2 className="font-serif-title mt-4 text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
            Essa formação foi criada para você que…
          </h2>
        </div>

        <div ref={listRef} className="mt-14 md:mt-20">
          {AUDIENCE_LIST.map((item) => (
            <div
              key={item.num}
              className="audience-item group border-t border-border-subtle py-10 last:border-b md:py-12"
            >
              <div className="grid items-center gap-6 md:grid-cols-[0.15fr_1.1fr_0.75fr] lg:grid-cols-[0.12fr_1fr_0.7fr]">
                <span className="font-[var(--font-manrope)] text-[clamp(2.5rem,5vw,4rem)] font-light leading-none text-text-primary/20 transition-colors duration-500 group-hover:text-accent/60">
                  {item.num}
                </span>
                <h3 className="font-[var(--font-manrope)] text-[clamp(1.2rem,3vw,1.9rem)] font-medium uppercase leading-tight tracking-[0.01em] text-text-primary transition-colors duration-500 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-text-secondary md:text-right">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}