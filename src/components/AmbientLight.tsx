"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AmbientLight() {
  const glow1 = useRef<HTMLDivElement | null>(null);
  const glow2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!reduced && glow1.current && glow2.current) {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: "max",
            scrub: 1.2,
          },
        });

        tl.to(glow1.current, { xPercent: -18, yPercent: 34, scale: 1.16 }, 0)
          .to(glow1.current, { xPercent: -42, yPercent: 14, scale: 1.3 }, 0.45)
          .to(glow1.current, { xPercent: -6, yPercent: -14, scale: 1.08 }, 1);

        tl.to(glow2.current, { xPercent: 26, yPercent: -22, scale: 1.18 }, 0)
          .to(glow2.current, { xPercent: 8, yPercent: 26, scale: 0.88 }, 0.55)
          .to(glow2.current, { xPercent: -16, yPercent: 10, scale: 1.2 }, 1);
      } else {
        gsap.set(glow1.current, { xPercent: -15, yPercent: 20 });
        gsap.set(glow2.current, { xPercent: 20, yPercent: 10 });
      }
    });

    mm.add("(max-width: 767.98px)", () => {
      gsap.set(glow1.current, { xPercent: -25, yPercent: 20, scale: 0.7 });
      gsap.set(glow2.current, { xPercent: 30, yPercent: 0, scale: 0.6, opacity: 0.6 });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={glow1}
        className="absolute -top-[22vw] right-[-18vw] h-[75vw] w-[75vw] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(38,96,168,0.34), rgba(23,62,115,0.18) 46%, transparent 72%)",
          filter: "blur(64px)",
          mixBlendMode: "screen",
          opacity: 0.9,
        }}
      />
      <div
        ref={glow2}
        className="absolute -bottom-[28vw] left-[-22vw] h-[62vw] w-[62vw] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(30,82,150,0.2), rgba(20,52,96,0.12) 46%, transparent 72%)",
          filter: "blur(96px)",
          mixBlendMode: "screen",
          opacity: 0.8,
        }}
      />
    </div>
  );
}