"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DOUBTS } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function PainSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsDesktop(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo(
          ".pain-headline",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );

        const doubtEls =
          gsap.utils.toArray<HTMLElement>(".pain-doubt");
        doubtEls.forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          });
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".pain-doubt").forEach((el) => {
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
                start: "top 60%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        gsap.fromTo(
          ".pain-headline",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".pain-headline",
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background py-24 md:py-32"
    >
      <div className="max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          {/* LEFT — sticky headline */}
          <div className="lg:sticky lg:top-[15vh] lg:self-start">
            <div className="pain-headline">
              <SectionLabel>Talvez você esteja aqui</SectionLabel>
              <h2 className="font-serif-title mt-4 text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.02] text-text-primary">
                Você ama unhas. Mas ainda não sabe como transformar isso em
                profissão.
              </h2>
            </div>
          </div>

          {/* RIGHT — intro + items in normal flow */}
          <div>
            <div className="pain-copy">
              <p className="text-[16px] leading-[1.6] text-text-secondary md:text-[17px]">
                Talvez você acompanhe outras profissionais, salve inspirações,
                veja resultados incríveis e pense que gostaria de trabalhar com
                isso também.
              </p>
              <p className="mt-3 text-[16px] leading-[1.6] text-text-secondary md:text-[17px]">
                Mas entre admirar e começar existe uma série de dúvidas:
              </p>
            </div>

            <div className="mt-8 lg:mt-12">
              {DOUBTS.map((doubt, i) => (
                <div key={doubt} className="relative">
                  <div
                    className={`pain-doubt group flex min-h-0 items-center border-t border-border-subtle last:border-b lg:min-h-[65vh] ${
                      isDesktop && i === activeIndex ? "is-active" : ""
                    } ${isDesktop && activeIndex > i ? "is-past" : ""}`}
                  >
                    <div className="flex w-full items-baseline gap-6 py-8 lg:gap-10 lg:py-0">
                      <span
                        className={`font-[var(--font-manrope)] text-[13px] font-light tracking-[0.1em] transition-colors duration-500 ${
                          isDesktop && i === activeIndex
                            ? "text-accent"
                            : isDesktop
                              ? "text-muted/40"
                              : ""
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex flex-1 items-baseline">
                        <h3
                          className={`font-serif-title pr-4 text-[clamp(1.6rem,4vw,2.8rem)] font-medium leading-[1.05] transition-colors duration-500 ${
                            isDesktop && i === activeIndex
                              ? "text-text-primary"
                              : isDesktop
                                ? "text-text-primary/40"
                                : "text-text-primary"
                          }`}
                        >
                          {doubt}
                        </h3>
                        <span className="ml-auto hidden text-[11px] font-medium uppercase tracking-[0.05em] text-muted/50 group-hover:text-accent/70 lg:block">
                          Talvez seja você
                        </span>
                      </div>
                    </div>
                  </div>

                  {i === 4 && (
                    <div className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-[110%] text-right lg:block">
                      <span className="text-[10px] font-medium uppercase tracking-[0.05em] text-muted/60">
                        E talvez nenhuma
                        <br />
                        dessas respostas tenha sido
                        <br />
                        respondida para você ainda.
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
