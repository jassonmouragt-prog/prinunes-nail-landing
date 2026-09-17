"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TRANSFORMATION_CONCEPTS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function Transformation() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          ".transf-image",
          { scale: 1.05, yPercent: -3 },
          {
            scale: 1,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".transf-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".transf-headline",
            start: "top 80%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".transf-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div className="relative">
            <div className="transf-image relative aspect-[3/4] w-full overflow-hidden rounded-[20px] lg:rounded-[28px]">
              <Image
                src="/images/transformation-nails.webp"
                alt="Trabalho profissional em unhas"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040b14]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.05em] text-text-primary/85">
                Técnica é como você<br />cuida de cada detalhe.
              </div>
            </div>
            <div className="absolute top-8 -left-4 hidden text-right lg:-left-10 lg:block">
              <span className="font-[var(--font-manrope)] text-[clamp(4rem,9vw,7rem)] font-light leading-none text-text-primary/20">
                01
                <span className="block text-[11px] font-medium uppercase tracking-[0.06em] text-accent/70">
                  Profissão
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="transf-headline">
              <SectionLabel>Do zero à profissão</SectionLabel>
              <h2 className="font-serif-title mt-4 text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
                Existe uma diferença entre{" "}
                <span className="italic text-gold">fazer unhas</span> e se
                tornar uma Nail Designer.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-text-secondary md:text-[17px]">
                Técnica profissional envolve mais do que reproduzir unhas
                bonitas. Envolve preparação, estrutura, cuidado — e a forma
                como você se apresenta para o mundo.
              </p>
            </div>

            <div className="mt-10">
              {TRANSFORMATION_CONCEPTS.map((concept) => (
                <div
                  key={concept.num}
                  className="transf-item group border-t border-border-subtle py-5 last:border-b"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-[var(--font-manrope)] text-[12px] font-light tracking-[0.1em] text-accent">
                      {concept.num}
                    </span>
                    <div>
                      <h3 className="font-serif-title text-xl font-medium text-text-primary transition-colors duration-300 group-hover:text-accent md:text-2xl">
                        {concept.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[14px] leading-[1.6] text-text-secondary">
                        {concept.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}