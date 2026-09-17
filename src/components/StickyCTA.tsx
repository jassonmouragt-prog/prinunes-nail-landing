"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/constants";
import MetallicButton from "@/components/ui/metallic-button";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      const offer = document.getElementById("oferta");
      if (!offer) return;

      const rect = offer.getBoundingClientRect();
      const vh = window.innerHeight;
      const passedOfferTop = rect.top < vh * 0.45;
      const farDown = window.scrollY > 300;

      setShow(farDown && passedOfferTop);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border-subtle bg-[#050e1c]/85 px-4 py-3 backdrop-blur-xl md:hidden">
      <MetallicButton
        label="Quero começar agora"
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        baseColor="#0A1424"
        sheenColor="#8DB5E8"
        shellSize="h-13 w-full"
        faceSize="h-12 w-[calc(100%-4px)]"
        className="w-full"
      />
    </div>
  );
}