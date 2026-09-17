"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    text: "Eu nunca tinha encostado em uma unha em gel na vida. Comecei do zero mesmo, assistindo pelo celular entre uma tarefa e outra. Em poucos meses eu já atendia minhas primeiras clientes com confiança.",
    author: "Marina Campos",
    role: "Nail Designer · começou do zero",
  },
  {
    text: "Eu tentava aprender sozinha, mas sentia que faltava direção. O que mudou de verdade foi o acabamento: entendi o porquê de cada passo e o meu resultado final deu um salto.",
    author: "Juliana Lima",
    role: "Já tentava aprender sozinha · hoje atende",
  },
  {
    text: "A Priscila ensina com paciência e com um cuidado que dá segurança. O grupo VIP tira as dúvidas na hora e não deixa você se sentir perdida em nenhuma etapa da formação.",
    author: "Camila Rocha",
    role: "Aluna da formação",
  },
  {
    text: "Eu adiava a profissão porque me sentia insegura. Hoje tenho técnica, atendimento e consigo cobrar pelo meu trabalho como ele merece.",
    author: "Fernanda Alves",
    role: "Nail Designer profissional",
  },
  {
    text: "Recomendo para quem quer começar do jeito certo. A formação organizou tudo que eu precisava aprender e o certificado de conclusão fechou com chave de ouro.",
    author: "Bianca Martins",
    role: "Começando a carreira",
  },
] as const;

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-headline",
            start: "top 80%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="testimonial-headline">
          <SectionLabel>Depoimentos</SectionLabel>
          <h2 className="font-serif-title mt-4 max-w-3xl text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
            Elas também começaram com uma dúvida.
            <span className="block italic text-gold">
              Hoje enxergam o Nail Design de outro jeito.
            </span>
          </h2>
        </div>
      </div>

      <div className="mt-14 md:mt-20">
        <div
          className="marquee-track flex w-max gap-6 px-5"
          style={{ "--marquee-duration": "50s" } as React.CSSProperties}
        >
          {items.map((t, i) => (
            <figure
              key={i}
              className="glass glass-hover flex w-[320px] shrink-0 flex-col justify-between rounded-[24px] p-8 sm:w-[380px]"
            >

              <div>
                <div className="flex gap-1 text-accent">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j} className="text-[13px]">
                      {s}
                    </span>
                  ))}
                </div>
                <blockquote className="mt-5 text-[15px] leading-[1.7] text-text-primary/90">
                  “{t.text}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40">
                  <span className="font-[var(--font-manrope)] text-sm font-light italic text-accent">
                    {t.author.trim().charAt(0) || "•"}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">
                    {t.author}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.05em] text-text-secondary">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}