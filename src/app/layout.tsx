import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Do Zero a uma Nail Designer de Sucesso | Formação Completa",
  description:
    "Uma formação criada para quem deseja começar do zero, desenvolver técnica e construir uma trajetória profissional no Nail Design.",
  metadataBase: new URL("https://pay.kiwify.com.br/cNBlHl2"),
  openGraph: {
    title: "Do Zero a uma Nail Designer de Sucesso",
    description:
      "Uma formação criada para quem deseja começar do zero, desenvolver técnica e construir uma trajetória profissional no Nail Design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="grain-overlay min-h-full bg-background text-text-primary font-[var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}