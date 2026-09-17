"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import MetallicButton from "@/components/ui/metallic-button";

export function PremiumButton({
  children,
  href = CHECKOUT_URL,
  variant = "solid",
  className = "",
}: {
  children: string;
  href?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const isSolid = variant === "solid";

  return (
    <MetallicButton
      label={children}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      baseColor={isSolid ? "#0A1424" : "#060E1A"}
      sheenColor={isSolid ? "#8DB5E8" : "#5A8ABF"}
      shellSize="h-13 w-full sm:w-[320px]"
      faceSize="h-12 w-[calc(100%-4px)]"
      className={`w-full sm:w-auto ${className}`}
    />
  );
}

export function SectionLabel({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.06em] ${
        dark ? "text-[#040b14]/60" : "text-accent"
      } ${className}`}
    >
      <span className={`h-px w-8 ${dark ? "bg-[#040b14]/30" : "bg-accent/50"}`} />
      <span>{children}</span>
    </div>
  );
}

export function DigitLabel({
  num,
  children,
}: {
  num: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-[var(--font-manrope)] text-[12px] font-light tracking-[0.12em] text-accent">
        {num}
      </span>
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`h-px w-full bg-border-subtle ${className}`} />
  );
}