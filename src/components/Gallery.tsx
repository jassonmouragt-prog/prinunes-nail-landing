"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_IMAGES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/Primitives";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-headline",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-headline",
            start: "top 80%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const row1 = GALLERY_IMAGES.slice(0, 6);
  const row2 = GALLERY_IMAGES.slice(6, 11);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-14">
        <div className="gallery-headline flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>O trabalho como linguagem</SectionLabel>
            <h2 className="font-serif-title mt-3 text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.02] text-text-primary">
              Cada detalhe conta uma história.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.6] text-text-secondary md:pb-3">
            Técnica, acabamento e cuidado — a beleza que vive nos detalhes que
            você aprende a dominar.
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-5 md:mt-20 md:space-y-6">
        <div className="marquee-track flex w-max gap-5 pr-5" style={{ "--marquee-duration": "38s" } as React.CSSProperties}>
          {[...row1, ...row1].map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] w-[240px] shrink-0 overflow-hidden rounded-[18px] sm:w-[300px] lg:w-[360px] lg:rounded-[24px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 240px, 360px"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#040b14]/35 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          ))}
        </div>

        <div className="marquee-track-reverse flex w-max gap-5 pr-5" style={{ "--marquee-duration": "34s" } as React.CSSProperties}>
          {[...row2, ...row2].map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] w-[200px] shrink-0 overflow-hidden rounded-[18px] sm:w-[260px] lg:w-[320px] lg:rounded-[24px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 200px, 320px"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#040b14]/45 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}