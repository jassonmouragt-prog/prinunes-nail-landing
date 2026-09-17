"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PremiumButton } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".final-image",
        { scale: 1.15 },
        { scale: 1, ease: "none", scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        } }
      );

      gsap.fromTo(
        ".final-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-background-deep"
    >
      <div className="absolute inset-0">
        <div className="final-image absolute inset-0">
          <Image
            src="/images/hero-nails.jpg"
            alt="Próxima profissional Nail Designer"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#040b14]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040b14] via-[#040b14]/45 to-[#040b14]/75" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 py-32 md:px-10">
        <div className="max-w-4xl text-center">
          <p className="final-fade text-[11px] font-semibold uppercase tracking-[0.06em] text-accent">
            Sua vez de começar
          </p>

          <h2 className="final-fade font-serif-title mt-6 text-[clamp(2.4rem,7vw,4.8rem)] font-medium leading-[1.02] text-text-primary">
            Seu primeiro passo não precisa ser perfeito.
            <span className="block italic text-gold">
              Ele só precisa acontecer.
            </span>
          </h2>

          <p className="final-fade mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] text-text-secondary md:text-[17px]">
            Se você deseja aprender, desenvolver técnica e começar a construir
            sua trajetória no Nail Design, essa pode ser a hora de começar.
          </p>

          <div className="final-fade mt-10">
            <PremiumButton className="w-full sm:w-auto">
              Quero me tornar uma Nail Designer
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  );
}