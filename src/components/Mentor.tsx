"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function Mentor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          ".mentor-image",
          { clipPath: "inset(8% 8% 8% 8%)", scale: 1.06 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".mentor-image",
              start: "top 75%",
            },
          }
        );

        gsap.fromTo(
          ".mentor-image",
          { yPercent: -4 },
          {
            yPercent: 4,
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
        ".mentor-copy",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative overflow-hidden bg-background py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-14">
        <div className="relative order-1">
          <div className="mentor-image relative aspect-[3/4] w-full overflow-hidden rounded-[20px] lg:max-h-[90vh] lg:rounded-[28px]">
            <Image
              src="/images/gallery-6.jpg"
              alt="Priscila Nunes — Nail Designer e Formadora"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040b14]/65 via-transparent to-[#040b14]/15" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between lg:bottom-8 lg:left-8 lg:right-8">
              <div>
                <p className="font-serif-title text-xl font-medium italic text-text-primary md:text-2xl">
                  “Toda técnica começa com uma decisão: a de aprender direito.”
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.05em] text-text-secondary">
                  Priscila Nunes
                </p>
              </div>
            </div>

            <div className="absolute top-6 right-6 flex items-center gap-3 lg:right-8">
              <span className="rounded-full border border-text-primary/25 bg-[#040b14]/30 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-text-primary/85 backdrop-blur-sm">
                8+ anos de experiência
              </span>
            </div>
          </div>
        </div>

        <div className="order-2 flex flex-col justify-center">
          <div className="mentor-copy">
            <SectionLabel>Sua mentora</SectionLabel>
          </div>

          <h2 className="mentor-copy font-serif-title mt-4 text-[clamp(2.4rem,6vw,4.2rem)] font-medium leading-[1.0] text-text-primary">
            Priscila
            <br />
            Nunes
          </h2>

          <p className="mentor-copy mt-3 text-[14px] font-medium uppercase tracking-[0.06em] text-accent">
            Nail Designer · Formadora
          </p>

          <div className="mentor-copy mt-7 space-y-4">
            <p className="max-w-xl text-[16px] leading-[1.6] text-text-secondary">
              Há mais de 8 anos Priscila constrói sua trajetória no Nail Design.
              Ao longo dessa caminhada ela estudou, se especializou e reuniu 5
              formações na área — não só para atender com excelência, mas para
              ensinar outras mulheres a fazerem o mesmo.
            </p>
            <p className="max-w-xl text-[16px] leading-[1.6] text-text-secondary">
              Ela acredita que qualquer pessoa pode começar do zero e construir
              uma carreira sólida com técnica, dedicação e direção certa. Por
              isso já acompanhou mais de 200 alunas aprendendo com segurança,
              tirando dúvidas de perto e evoluindo de verdade.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="glass rounded-[18px] p-5 md:rounded-[20px] md:p-6">
              <p className="font-[var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-light text-text-primary">
                8+
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.04em] text-text-secondary">
                Anos de experiência
              </p>
            </div>
            <div className="glass rounded-[18px] p-5 md:rounded-[20px] md:p-6">
              <p className="font-[var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-light text-text-primary">
                200+
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.04em] text-text-secondary">
                Alunas formadas
              </p>
            </div>
            <div className="glass rounded-[18px] p-5 md:rounded-[20px] md:p-6">
              <p className="font-[var(--font-manrope)] text-[clamp(2rem,4vw,3rem)] font-light text-text-primary">
                05
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.04em] text-text-secondary">
                Formações
              </p>
            </div>
          </div>

          <div className="mentor-copy mt-8 flex items-center gap-4">
            <span className="font-[var(--font-manrope)] text-xl font-light italic text-text-primary/70">
              Priscila Nunes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}