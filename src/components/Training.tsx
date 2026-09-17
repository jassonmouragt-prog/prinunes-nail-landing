"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TRAINING_MODULES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

const MODULE_IMAGES = [
  "/images/modulo-01.webp",
  "/images/modulo-02.webp",
  "/images/modulo-03.webp",
];

export default function Training() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const displayIndex = hovered ?? active;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".training-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".training-headline",
            start: "top 80%",
          },
        }
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const modules = Array.from(
          ref.current?.querySelectorAll(".training-module") ?? []
        );

        modules.forEach((mod, i) => {
          ScrollTrigger.create({
            trigger: mod,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => {
              if (self.isActive) setActive(i);
            },
          });
        });

        modules.forEach((mod, i) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: mod,
              start: "top center",
              end: "bottom center",
              onUpdate: () => {
                const activeNow =
                  document.querySelector<HTMLDivElement>(".training-module.active");
                const idx = activeNow ? Number(activeNow.dataset.index) : 0;
                gsap.to(mod, {
                  opacity: idx === i ? 1 : 0.35,
                  x: idx === i ? 0 : -8,
                  duration: 0.4,
                  ease: "power3.out",
                });
              },
            },
          });
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = ref.current?.querySelector(
      `[data-index="${displayIndex}"] .training-preview-image`
    );
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [displayIndex]);

  return (
    <section
      ref={ref}
      id="formacao"
      className="relative overflow-hidden bg-surface py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="training-headline max-w-2xl">
          <SectionLabel>A formação</SectionLabel>
          <h2 className="font-serif-title mt-4 text-[clamp(2.1rem,5.5vw,3.8rem)] font-medium leading-[1.02] text-text-primary">
            Uma jornada pensada para levar você do primeiro passo à segurança
            profissional.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            {TRAINING_MODULES.map((mod, i) => (
              <div
                key={mod.num}
                data-index={i}
                className={`training-module ${
                  displayIndex === i ? "active" : ""
                } group relative border-t border-border-subtle first:border-t-0`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center gap-6 py-8 md:gap-10 md:py-10">
                  <span
                    className={`font-[var(--font-manrope)] text-[13px] font-light tracking-[0.1em] transition-colors duration-500 ${
                      displayIndex === i ? "text-accent" : "text-muted/40"
                    }`}
                  >
                    {mod.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-serif-title text-[clamp(1.7rem,4vw,3rem)] font-medium leading-[1.0] transition-colors duration-500 ${
                        displayIndex === i
                          ? "text-text-primary"
                          : "text-text-primary/40"
                      }`}
                    >
                      {mod.title}
                    </h3>
                    <p
                      className={`mt-2 text-[13px] uppercase tracking-[0.04em] transition-colors duration-500 ${
                        displayIndex === i ? "text-accent" : "text-muted/40"
                      }`}
                    >
                      {mod.subtitle}
                    </p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle transition-all duration-500 group-hover:border-accent group-hover:bg-white/5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`transition-all duration-500 ${
                          displayIndex === i ? "rotate-90" : "rotate-0"
                        }`}
                      >
                        <path
                          d="M1 6H11M6 1V11"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          className={
                            displayIndex === i
                              ? "text-accent"
                              : "text-muted/50"
                          }
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden">
                  <div
                    className={`grid transition-all duration-500 ${
                      displayIndex === i
                        ? "grid-rows-[20rem]"
                        : "grid-rows-[0]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative h-[20rem] w-full overflow-hidden rounded-[18px]">
                        <Image
                          src={
                            MODULE_IMAGES[i % MODULE_IMAGES.length]
                          }
                          alt={`Módulo ${mod.num}`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-border-subtle pt-6">
              <p className="text-[12px] uppercase tracking-[0.05em] text-muted/60">
                Conteúdo detalhado divulgado em breve.
              </p>
            </div>
          </div>

          <div className="relative hidden overflow-hidden lg:block">
            <div className="sticky top-28 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
              {MODULE_IMAGES.slice(0, TRAINING_MODULES.length).map(
                (src, i) => (
                  <div
                    key={src}
                    data-index={i}
                    className={`training-preview-image absolute inset-0 transition-all duration-700 ease-[var(--ease-premium)] ${
                      displayIndex === i
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.04] pointer-events-none"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Visualização módulo ${i + 1}`}
                      fill
                      sizes="35vw"
                      className="object-cover"
                    />
                  </div>
                )
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040b14]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-[10px] font-semibold uppercase tracking-[0.05em] text-text-primary/90">
                Módulo {TRAINING_MODULES[displayIndex].num}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}