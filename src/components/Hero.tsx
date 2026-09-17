"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PremiumButton, SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "Do zero à profissão que pode transformar a sua independência.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const words = useMemo(() => HEADLINE.split(" "), []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-word", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-fade", { y: 24, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(".hero-word", {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1.1,
      }).to(
        ".hero-fade",
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 },
        "-=0.5"
      );

      gsap.fromTo(
        ".hero-banner",
        { clipPath: "inset(8% 8% 8% 8%)", scale: 1.1, opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.8 }
      );

      gsap.to(".hero-content", {
        yPercent: -12,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(".hero-banner-inner", {
          yPercent: 8,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-background"
    >
      <div className="hero-banner relative z-[6] mt-16 h-[68svh] w-full shrink-0 overflow-hidden lg:absolute lg:inset-0 lg:mt-0 lg:h-full">
        <div className="hero-banner-inner absolute inset-0">
          <Image
            src="/images/banner-hero-desktop.webp"
            alt="Priscila Nunes — Formação para Nail Designers"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover lg:block"
          />
          <Image
            src="/images/banner-hero-mobile-97355ca8.webp"
            alt="Priscila Nunes — Formação para Nail Designers"
            fill
            priority
            sizes="100vw"
            className="object-cover lg:hidden"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-[#040b14]/30 via-transparent to-[#040b14]/70 lg:block" />
      </div>

      <div className="hero-mobile-fade pointer-events-none absolute inset-x-0 bottom-0 z-[8] h-[46svh] bg-[linear-gradient(to_top,#07111F_0%,rgba(7,17,31,0.92)_30%,rgba(7,17,31,0.6)_52%,rgba(7,17,31,0.22)_72%,rgba(7,17,31,0)_88%)] lg:hidden" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-14 md:px-10 lg:items-start lg:justify-center lg:px-14 lg:pb-28 lg:pt-[calc(var(--header-height)+2rem)]">
        <div className="hero-content w-full lg:max-w-[620px]">
          <div className="hero-fade">
            <SectionLabel>Formação para Nail Designers</SectionLabel>
          </div>

          <h1 className="font-serif-title mt-4 text-[clamp(2.4rem,9.5vw,4.4rem)] font-medium leading-[0.98] text-text-primary lg:leading-[0.98]">
            {words.map((word, i) => (
              <span
                key={i}
                className="hero-word inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]"
              >
                <span
                  className={
                    i >= 6 && i <= 9
                      ? "text-gold inline-block"
                      : "inline-block"
                  }
                >
                  {word}
                  {i < words.length - 1 ? "\u00A0" : ""}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-5 max-w-md text-[16px] leading-[1.6] text-text-secondary md:text-[17px]">
            Uma formação criada para quem deseja começar do zero, desenvolver
            técnica e construir uma trajetória profissional no Nail Design.
          </p>

          <div className="hero-fade mt-8 flex flex-col gap-4">
            <PremiumButton className="w-full sm:w-auto">
              Quero me tornar uma Nail Designer
            </PremiumButton>
          </div>

          <div className="hero-fade mt-5 flex items-center gap-3 text-[12px] tracking-[0.01em] text-muted">
            <span className="h-px w-8 bg-border-subtle" />
            Acesso através da plataforma Kiwify.
          </div>
        </div>
      </div>

      <div className="hero-scroll relative z-10 hidden shrink-0 flex-col items-center gap-3 pb-8 lg:flex">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-text-primary/25 pt-2">
          <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-text-primary/70" />
        </div>
        <span className="text-[9px] font-medium uppercase tracking-[0.06em] text-muted">
          Descubra o método
        </span>
      </div>
    </section>
  );
}