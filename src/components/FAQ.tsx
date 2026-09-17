"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Minus, Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-headline",
            start: "top 80%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      id="faq"
      className="relative bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-14">
        <div className="faq-headline max-w-2xl">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="font-serif-title mt-4 text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
            Antes de decidir, deixe tudo claro.
          </h2>
        </div>

        <div className="mt-12 md:mt-16">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.question}
              className="faq-item border-t border-border-subtle last:border-b"
            >
              <button
                onClick={() => toggle(i)}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className="flex items-baseline gap-6">
                  <span className="hidden font-[var(--font-manrope)] text-[12px] font-light tracking-[0.08em] text-accent sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif-title text-[clamp(1.2rem,3vw,1.8rem)] font-medium leading-snug transition-colors duration-300 ${
                      openIndex === i
                        ? "text-text-primary"
                        : "text-text-primary/80 group-hover:text-text-primary"
                    }`}
                  >
                    {item.question}
                  </span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-subtle transition-all duration-500 group-hover:border-accent/60">
                  {openIndex === i ? (
                    <Minus className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} />
                  ) : (
                    <Plus className="h-3.5 w-3.5 text-muted" strokeWidth={1.8} />
                  )}
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
              >
                <div>
                  <p className="pb-7 pl-0 text-[15px] leading-[1.7] text-text-secondary sm:pl-14">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}