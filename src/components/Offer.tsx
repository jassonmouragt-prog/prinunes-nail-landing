"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { CHECKOUT_URL, OFFER_BENEFITS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";
import MetallicButton from "@/components/ui/metallic-button";

gsap.registerPlugin(ScrollTrigger);

export default function Offer() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".offer-fade",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".offer-card",
        { y: 48, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".offer-card",
            start: "top 75%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="oferta"
      className="relative overflow-hidden bg-surface py-24 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(38,96,168,0.28), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-14">
        <div className="offer-fade text-center">
          <div className="flex justify-center">
            <SectionLabel>Sua decisão começa aqui</SectionLabel>
          </div>
          <h2 className="font-serif-title mt-6 text-[clamp(2.6rem,7vw,4.8rem)] font-medium leading-[1.0] text-text-primary">
            Do Zero a uma
            <br />
            <span className="italic text-gold">Nail Designer de Sucesso</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.6] text-text-secondary md:text-[17px]">
            Comece sua jornada com uma formação criada para transformar
            interesse em técnica e técnica em profissão.
          </p>
        </div>

        <div className="offer-card glass relative mt-14 overflow-hidden rounded-[24px] md:mt-20 lg:rounded-[32px]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] lg:min-h-[560px]">
              <div className="absolute inset-0">
                <Image
                  src="/images/mockup-curso-0c13ca02.webp"
                  alt="Treinamento Do Zero a uma Nail Designer de Sucesso"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b14]/92 via-[#040b14]/45 to-[#040b14]/10" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 text-accent">
                    <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-accent">
                    Formação completa
                  </p>
                </div>
                <h3 className="font-serif-title mt-4 max-w-sm text-[clamp(1.7rem,4vw,2.8rem)] font-medium leading-[1.05] text-text-primary">
                  Aulas, prática e acompanhamento em um só lugar
                </h3>
                <p className="mt-3 max-w-sm text-[14px] leading-[1.6] text-text-secondary">
                  Acesso ao conteúdo completo dentro da plataforma oficial,
                  direto pelo seu celular ou computador.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 md:p-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-accent">
                O que você recebe
              </p>

              <ul className="mt-8 space-y-5">
                {OFFER_BENEFITS.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check
                        className="h-3 w-3 text-accent"
                        strokeWidth={2.5}
                      />
                    </span>
                    <span className="text-[15px] leading-snug text-text-primary">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="offer-price mt-10 flex flex-col items-center border-t border-border-subtle pt-8 text-center">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted/70">
                    Por apenas
                  </span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif-title text-[clamp(1.5rem,3vw,2rem)] text-text-primary/70">
                      R$
                    </span>
                    <span className="font-serif-title bg-gradient-to-b from-[#F7E484] via-[#E8C94F] to-[#C7A12B] bg-clip-text text-[clamp(5rem,10vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-transparent">
                      297
                    </span>
                    <span className="font-serif-title self-end pb-3 text-[clamp(1.1rem,2.2vw,1.5rem)] text-text-primary/50">
                      ,00
                    </span>
                  </div>
                  <p className="text-[13px] uppercase tracking-[0.04em] text-muted/80">
                    ou em até 12x no cartão
                  </p>
                </div>

                <MetallicButton
                  label="Sim, eu quero começar"
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  baseColor="#0A1424"
                  sheenColor="#8DB5E8"
                  shellSize="h-15 w-full"
                  faceSize="h-14 w-[calc(100%-4px)]"
                  className="mt-8 w-full"
                />

                <div className="mt-6 flex flex-col gap-2 text-center">
                  <p className="text-[11px] uppercase tracking-[0.06em] text-muted/70">
                    Pagamento processado de forma segura pela Kiwify.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-muted/70">
                    <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Compra segura · Acesso imediato
                  </div>
                  <p className="mt-2 text-[11px] text-muted/60">
                    7 dias de garantia (direito de arrependimento — CDC)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}