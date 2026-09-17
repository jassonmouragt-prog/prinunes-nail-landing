"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function Results() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".results-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".results-headline",
            start: "top 80%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".result-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.06,
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

  const results = [
  {
    src: "/images/unhas/unhas-01.webp",
    student: "Aluna Marina Campos",
    procedure: "Esmaltação em gel",
  },
  {
    src: "/images/unhas/unhas-02.webp",
    student: "Aluna Juliana Lima",
    procedure: "Alongamento em gel",
  },
  {
    src: "/images/unhas/unhas-04.webp",
    student: "Aluna Camila Rocha",
    procedure: "Banho de gel",
  },
  {
    src: "/images/unhas/unhas-05.webp",
    student: "Aluna Fernanda Alves",
    procedure: "Esmaltação em gel",
  },
  {
    src: "/images/unhas/unhas-07.webp",
    student: "Aluna Bianca Martins",
    procedure: "Alongamento em gel",
  },
  {
    src: "/images/unhas/unhas-08.webp",
    student: "Aluna Raiane Souza",
    procedure: "Manicure em gel",
  },
  {
    src: "/images/unhas/unhas-10.webp",
    student: "Aluna Larissa Prado",
    procedure: "Nail art em gel",
  },
  {
    src: "/images/unhas/unhas-11.webp",
    student: "Aluna Tainá Ribeiro",
    procedure: "Banho de gel",
  },
];

  return (
    <section
      ref={ref}
      id="resultados"
      className="relative bg-surface py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="results-headline flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Resultados reais</SectionLabel>
            <h2 className="font-serif-title mt-4 max-w-2xl text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
              Quando técnica encontra prática, o resultado aparece.
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-[1.6] text-text-secondary md:pb-3">
            Trabalhos e evoluções de alunas da formação. Sem anúncio. Sem
            promessa vazia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:mt-20 lg:grid-cols-4 lg:gap-6">
          {results.map((result, i) => (
            <div
              key={result.src + i}
              className="result-item group relative aspect-[3/4] overflow-hidden rounded-[18px]"
            >
              <Image
                src={result.src}
                alt={result.procedure}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#040b14]/80 via-[#040b14]/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                <div className="p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-text-primary/90">
                    {result.procedure}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.04em] text-text-secondary">
                    {result.student}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass mt-12 flex flex-col items-center justify-center gap-4 rounded-[24px] p-8 text-center">
          <p className="text-[13px] uppercase tracking-[0.05em] text-accent">
            [INSERIR PRINT / FEEDBACK REAL DE ALUNA]
          </p>
          <p className="max-w-md text-[14px] leading-[1.6] text-text-secondary">
            Depoimento real será posicionado aqui — com print do WhatsApp,
            Instagram ou vídeo de aluna da formação.
          </p>
        </div>
      </div>
    </section>
  );
}