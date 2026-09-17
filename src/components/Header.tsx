"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CHECKOUT_URL } from "@/lib/constants";
import MetallicButton from "@/components/ui/metallic-button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-premium)] ${
        scrolled
          ? "bg-[#05101f]/75 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ height: "var(--header-height)" }}
    >
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a
          href="#top"
          onClick={(e) => scrollTo(e, "#top")}
          className="flex items-center"
        >
          <Image
            src="/images/logo.webp"
            alt="Prinune.S"
            width={2172}
            height={724}
            priority
            className="h-9 w-auto md:h-10"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="group relative text-[12px] font-medium uppercase tracking-[0.05em] text-muted transition-colors duration-300 hover:text-text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <MetallicButton
            label="Quero começar"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            baseColor="#060E1A"
            sheenColor="#5A8ABF"
            shellSize="h-10.5 w-[150px]"
            faceSize="h-9.5 w-[146px]"
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-text-primary lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[64px] z-40 bg-[#050e1c]/95 backdrop-blur-2xl transition-all duration-500 ease-[var(--ease-premium)] lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="font-serif-title text-3xl font-medium text-text-primary transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <MetallicButton
            label="Quero começar"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            baseColor="#060E1A"
            sheenColor="#5A8ABF"
            shellSize="h-13 w-full max-w-xs"
            faceSize="h-12 w-[calc(100%-4px)]"
            className="mt-4 w-full max-w-xs"
          />
        </nav>
      </div>
    </header>
  );
}