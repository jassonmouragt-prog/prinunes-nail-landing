"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MARQUEE_ITEMS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      ref={ref}
      className="relative border-y border-border-subtle bg-surface py-5 md:py-6"
    >
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12 md:gap-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-12 md:gap-16"
            >
              <span className="font-serif-title text-xl font-medium tracking-wide text-text-primary md:text-2xl">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}