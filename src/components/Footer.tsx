"use client";

import { AtSign } from "lucide-react";
import Image from "next/image";
import { INSTAGRAM_URL, CHECKOUT_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background px-5 py-14 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/images/logo.webp"
              alt="Prinune.S"
              width={2172}
              height={724}
              className="h-12 w-auto"
            />
            <p className="mt-3 max-w-xs text-[13px] leading-[1.6] text-text-secondary">
              Formação para Nail Designers — do zero à construção de uma
              profissão com técnica, segurança e propósito.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-accent">
                Navegação
              </p>
              <ul className="mt-4 space-y-3 text-[14px]">
                <li>
                  <a href="#para-quem" className="text-text-primary/80 transition-colors hover:text-accent">
                    Para quem é
                  </a>
                </li>
                <li>
                  <a href="#formacao" className="text-text-primary/80 transition-colors hover:text-accent">
                    A formação
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-text-primary/80 transition-colors hover:text-accent">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="text-text-primary/80 transition-colors hover:text-accent">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-text-primary/80 transition-colors hover:text-accent">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-accent">
                Contato
              </p>
              <ul className="mt-4 space-y-3 text-[14px]">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-primary/80 transition-colors hover:text-accent"
                  >
                    <AtSign className="h-4 w-4" strokeWidth={1.5} />
                    @prinune.s
                  </a>
                </li>
                <li>
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary/80 transition-colors hover:text-accent"
                  >
                    Plataforma Kiwify
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-border-subtle" />

        <div className="mt-6 flex flex-col gap-3 text-[12px] text-muted/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Do Zero a uma Nail Designer de Sucesso. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="transition-colors hover:text-text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-text-primary">
              Termos de Uso
            </a>
            <span className="hidden text-muted/40 sm:inline">·</span>
            <span>Pagamento processado pela Kiwify.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}