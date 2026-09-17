# SESSION-PROGRESS — Landing Page "Do Zero a uma Nail Designer de Sucesso"

## Concluído (fase 10 — Hero full-bleed com banners)
- Banners adicionados: `assets/banner_hero_desktop.png` (1672×941) e `assets/benner hero mobile.png` (941×1672), convertidos para WebP (~88KB cada) em `public/images/banner-hero-desktop.webp` e `public/images/banner-hero-mobile.webp`.
- Hero reescrito como janela full-bleed (sem boxes/recorte arredondado): banner ocupa o `min-h-[100svh]` inteiro via `absolute inset-0` + `object-cover`.
- Desktop (≥1024px): usa o banner landscape; **assunto à direita, conteúdo à esquerda** (`lg:items-start`, bloco `lg:max-w-[620px]`, verticalmente centralizado). Overlay de leitura `from-left` sutil.
- Mobile (<1024px): usa o banner portrait; **assunto centralizado no topo e informações no fim do banner** (`justify-end` + `pb-14`), com overlay bottom para contraste.
- Removidos card de imagem antigo, chip "Nail Design", texto vertical, overlay radial fixo. Mantidos: reveal word-by-word, fade do conteúdo, parallax do banner (scrub) e indicador de scroll (desktop).
- `next build` + `eslint` OK; servidor 200 na porta 3200; banners servindo 200.

## Concluído (fase 9 — dados reais do produto: Mentora, Depoimentos, Benefícios, Preço, FAQ)
- **Mentor**: nome **Priscila Nunes**, "Nail Designer · Formadora", badge "8+ anos de experiência"; história/motivação escritas; stats **8+** anos / **200+** alunas formadas / **05** formações; frase pessoal e assinatura "Priscila Nunes".
- **Depoimentos**: 5 rascunhos criados (Marina Campos, Juliana Lima, Camila Rocha, Fernanda Alves, Bianca Martins) com contexto antes/depois, elegíveis para substituição por depoimentos reais.
- **Benefícios (OFFER_BENEFITS)**: "Formação completa do zero ao profissional", "Acesso vitalício ao conteúdo", "Grupo VIP para dúvidas", "Certificado de conclusão".
- **Preço**: **R$ 297** exibido na oferta; parcelamento "ou em até 12x no cartão" (parcelamento Kiwify); linha de preço anterior REMOVIDA (não existe) junto com o bloco GSAP `.offer-minus`; garantia "7 dias de garantia (direito de arrependimento — CDC)".
- **FAQ**: 8 respostas oficiais escritas — sem experiência prévia necessária, acesso 100% online (Kiwify), celular compatível, **acesso vitalício**, materiais prioritários, certificado inclusivo, garantia 7 dias/CDC.
- Pendente (fora do escopo, dados não fornecidos): módulos do treinamento, prints/mockup da oferta, resultados reais (fica o placeholder).
- `next build` + `eslint` OK; servidor 200 na porta 3200.

## Concluído (fase 8 — correção mobile: botão ImpactPhrase + dourado cortado)
- **Botão "Começar minha jornada" invisível no mobile**: `MetallicButton` não tem conteúdo em fluxo (todas as camadas são `absolute`) → wrapper `inline-block` com largura auto colapsava para 0; o shell `w-full` resolvia contra paí indefinido. Fix: `PremiumButton` agora passa `className` default `w-full sm:w-auto` (antes `""`), dando largura definida ao wrapper no mobile; no desktop `sm:w-auto` + shell `sm:w-[320px]` mantém o pill fixo. Header/Offer/StickyCTA já passavam `w-full` explícito.
- **Dourado cortado nos cantos (mobile)**: spans inline com `line-height` apertado (1.0–1.05) → `background-clip: text` pinta só a área do line box; descendentes (g, p, y) fora da caixa ficavam transparentes (cantos cortados). Fix: `.text-gold` ganhou `padding: 0.12em 0.04em; margin: -0.12em -0.04em` — estende a área pintada sem mudar layout (margens negativas compensam).
- `next build` + `eslint` OK; servidor 200 na porta 3200.

## Concluído (fase 7 — NotFor: correção de legibilidade)
- Layout da seção "Não é para você se…" refeito para legibilidade: layout centralizado com label em caixa alta ladeado por h-lines de `accent/50`, texto centralizado em `max-w-3xl`, tipografia `var(--font-manrope)` font-normal (antes `font-serif-title` font-medium), tamanho `clamp(1.25rem,3vw,1.9rem)`, leading `1.45`, tracking `-0.01em` (antes leading 1.1, clamp até 2.4rem). Espaçamento vertical mais generoso `md:py-24`. Lint OK.

## Concluído (fase 6 — botões metálicos WebGL `MetallicButton`)
- Criado `src/components/ui/metallic-button.tsx` com o componente fornecido (shader GLSL WebGL2 com bandas metálicas animadas, aberração cromática, ruído simplex, ripple de clique, hover/press, `prefers-reduced-motion`, IntersectionObserver pausando offscreen e degradação graciosa sem WebGL2). Código do shader INTACTO.
- Adaptações do componente: props opcionais `shellSize`/`faceSize` (fallback `h-11.5 w-35.5` / `h-10.5 w-34.5`); props `href`/`target`/`rel` (renderiza `<a>` no lugar do `<button>` quando `href` presente — mantém ripple/hover/press e evita `<a><button>` aninhado); label tipográfico do site (`text-[13px] font-semibold uppercase tracking-[0.02em] text-[#f4f8ff]` + text-shadow); face gradient navy `linear-gradient(180deg,#0E1B30,#0A1424)` no lugar do preto `#202020→#000000`.
- Lint: corrigidos 5 erros do `react-hooks/refs`/`prefer-const` herdados do código-fonte (sincronização de refs movida para `useEffect` sem deps; `let`→`const` em `targetPixelWidth/Height`).
- Cores por uso: principais (`baseColor #0A1424`, `sheenColor #8DB5E8`) em Hero/FinalCTA/ImpactPhrase (via `PremiumButton`), Offer e StickyCTA; secundárias mais discretas (`#060E1A`/`#5A8ABF`) no Header (desktop + mobile menu).
- Tamanhos: `PremiumButton` → `h-13 w-full sm:w-[320px]` (face `h-12 w-[calc(100%-4px)]`); Header desktop `h-11.5 w-[130px]`; mobile menu full/max-w-xs; Offer `h-15 w-full` (60px) e StickyCTA `h-13 w-full`.
- REMOVIDO o sistema CSS `.btn-metal`/`.btn-metal--secondary` do `globals.css` — zero referências restantes (componentes e CSS verificados).
- Removidas setas `ArrowRight` de Offer e StickyCTA (o efeito metálico é o affordance); `lucide-react` já presente.
- `next build` + `eslint` passando. Servidor 200 na porta 3200.

## Concluído (fase 5 — sistema de botões metálico premium)
- Substituído `.btn-grad` (gradiente azul flat) pelo novo sistema `.btn-metal` (`globals.css:208`) — botão cápsula premium com:
  - `border-radius: 999px` (pill/cápsula completa).
  - Background multi-camada via `padding-box` + `border-box`: base vertical navy profundo (`rgba(255,255,255,0.10)→rgba(14,27,48,0.96)→rgba(5,11,20,0.98)`); dois radial-glows de canto azul frio (top-left/top-right); borda metálica degradê (`rgba(229,242,255,0.85)→rgba(151,193,238,0.6)→rgba(76,126,189,0.35)→rgba(255,255,255,0.16)`) via `border: 1px solid transparent`.
  - Sombra interna: `inset 0 1px 1px rgba(255,255,255,0.18)` (top highlight) + `inset 0 -10px 20px rgba(0,0,0,0.30)` (bottom depth) + `inset 0 0 0 1px rgba(52,92,140,0.18)` (inner border ring).
  - Externa: `0 10px 30px` + `0 0 24px rgba(71,125,196,0.14)` glow azul difuso.
  - Texto: `#F4F8FF`, font-weight 600, tracking `0.02em`, `text-shadow` discreto.
- **Hover** (`@media (hover:hover)`): `translateY(-2px)`, inset ring brilha (`rgba(141,181,232,0.50)`), glow externo intensificado.
- **Active**: `translateY(1px) scale(0.99)`, `filter: brightness(0.97)`, sombras recuadas.
- **`.btn-metal--secondary`**: mesma família, sem radiais de canto, borda mais discreta (`rgba(204,226,250,0.55)`), glow externo reduzido — usada no Header (desktop + mobile menu).
- **`PremiumButton`** (`Primitives.tsx:17`): base `rounded-full`, variantes `solid` → `btn-metal text-[#f4f8ff]`; `outline`/`light` → `btn-metal btn-metal--secondary text-[#eaf2fd]`. Min-height 52/56px mantido.
- **Header**: desktop CTA → `btn-metal btn-metal--secondary rounded-full min-h-[46px]`; mobile menu CTA → `btn-metal btn-metal--secondary rounded-full min-h-[52px]`.
- **Offer CTA** (`Offer.tsx:174`): `btn-metal rounded-full min-h-[60px]`.
- **StickyCTA** (`StickyCTA.tsx:41`): `btn-metal rounded-full min-h-[52px]`.
- Zero referências restantes a `btn-grad`. `next build` + `eslint` passando. Servidor 200 na porta 3200.

## Concluído (fase 4 — correção do scroll da PainSection)
- REMOVIDO o pin/scroll-jacking da PainSection (era `pin: true` + `onUpdate` consumindo scroll para trocar itens com a página parada).
- Nova arquitetura desktop (≥1024px): coluna esquerda (título) `position: sticky; top: 15vh; self-start`; coluna direita com intro + itens no FLUXO NORMAL da página. Cada item `min-height: 65vh` + `flex items-center` → itens chegam fisicamente ao centro da viewport conforme o scroll real desce.
- ScrollTrigger individual por item (`start: "top 60%"`, `end: "bottom 40%"`; `onEnter`/`onEnterBack` → setActiveIndex(i)); nenhum scroll artificial, wheel/preventDefault/snap.
- Estados visuais via CSS (`globals.css`, `@media (min-width:1024px)`): `.pain-doubt` base opacity 0.35 + translateY(20px); `.is-active` opacity 1 / y 0; `.is-past` opacity 0.35 / y 0. Transições suaves com `--ease-premium`. Número e título ganham/p erdem destaque conforme ativo.
- Scroll de volta: `onEnterBack` reativa corretamente os itens anteriores.
- Mobile (≤1023px): em fluxo natural da página, cada item revela com fade+rise, sem pin.
- Lenis já sincronizado (`lenis.on("scroll", ScrollTrigger.update)`) no AnimationProvider — confirmado.
- `next build` + `eslint` passando; servidor 200 na porta 3200.

## Concluído (fase 3 — destaque dourado/champagne nos títulos)
- Nova classe `.text-gold` no `globals.css`: degradê champagne `#F6E7C8 → #E4CCA0 → #CFAE78 → #A8824F` (135deg) via `background-clip: text` + `text-fill-color: transparent`; acabamento com `drop-shadow` sutil (contorno escuro 1px para contraste + glow dourado difuso 14px/alpha 0.10). Fallback de cor `#F6E7C8` + `@supports` para navegadores sem suporte. Mobile (≤767px): glow reduzido para 9px/alpha 0.07.
- Aplicado SOMENTE nos destaques de títulos de maior impacto (8 pontos), mantendo azul `text-accent` em labels, números, ícones e hover states:
  - Hero h1: palavras "transformar a sua independência." (índices 6–9, Hero.tsx:118).
  - Build h2: "Construir uma nova versão profissional de você." (Build.tsx:60).
  - TransitionPhrase: "Precisa começar da maneira certa." (TransitionPhrase.tsx:44).
  - Transformation h2: "fazer unhas" (Transformation.tsx:107).
  - ImpactPhrase: " primeiro atendimento." (ImpactPhrase.tsx:66).
  - Testimonials h2: "Hoje enxergam o Nail Design de outro jeito." (Testimonials.tsx:69).
  - Offer h2: "Nail Designer de Sucesso" (nome do produto, Offer.tsx:88).
  - FinalCTA h2: "Ele só precisa acontecer." (FinalCTA.tsx:75).

## Concluído (fase 2 — refinamento visual "Marinho + Glass + Sans")
- Identidade trocada de preto para azul marinho: `--background:#07111f`, `--background-deep:#040b14`, `--surface:#0b1728`, `--surface-secondary:#0e1d31`; texto `#f4f7fa` / `rgba(235,242,250,0.72)` / `rgba(220,230,240,0.52)`; bordas `rgba(255,255,255,0.10)`.
- Tipografia 100% sans (Manrope). `.font-serif-title` agora é Manrope 600 com `letter-spacing:-0.03em` (CSS unlayered sobrepõe utilities). Cormorant removido do `layout.tsx`.
- Luz ambiente `AmbientLight.tsx`: overlay fixed z-5, `mix-blend-mode:screen`, glows azuis com blur 64/96px, movimento via GSAP scrub (desktop ≥768px); mobile estático com escala/opacidade reduzidas; respeita `prefers-reduced-motion`.
- Glassmorphism: `.glass` (bg `rgba(255,255,255,0.04)` + blur 16px + borda + highlight top) + `.glass-hover` (translateY(-4px), só em `@media (hover:hover)`). Aplicado em Build (4 cards 24/28px), Mentor (stats), Results (placeholder), Testimonials e card da Oferta (24/32px).
- Botões: `.btn-grad` gradiente `#4d8ed8→#275c9e` + glow azul; min-h 52px mobile / 56px desktop; radius 18–999px. CTAs de Header, Oferta, StickyCTA e PremiumButton usando o gradiente navy.
- Overlays de imagem todos migrados de black → `#040b14` (Hero, Training, Transformation, Gallery, Mentor, Results, Oferta, FinalCTA).
- Glows "greige" (rgba(201,196,188)) substituídos por azul `rgba(38,96,168,…)` em Hero, ImpactPhrase e Oferta.
- Tracking compactado: headlines `-0.02/-0.03em`, labels `0.04–0.08em`; números decorativos passaram a usar `font-[var(--font-manrope)] font-light` (evita peso 600 do `.font-serif-title`).
- Leading fechado em headlines (0.95–1.05); agrupamento label→headline→texto→CTA mais próximo (mt-4/5/8) mantendo respiro entre seções (py-24/36).
- Seções com `bg-black` migradas: Build/`bg-background-deep`, Hero/Pain/Gallery/Mentor/Testimonials/FAQ/Footer/`bg-background`, Training/etc. bg-surface/herdado → navy automático.
- `next build` + `eslint` passando. Página servindo via `next start` (porta 3200, status 200).

## Concluído (fase 1 — base)
- Projeto Next.js 16 (App Router) criado em `nail-landing/` com TypeScript + Tailwind v4.
- Dependências instaladas: `gsap`, `@studio-freight/lenis`, `lucide-react`.
- Fontes: anteriormente Cormorant (headlines, agora removida) + Manrope (interface).
- Design tokens no `globals.css`.
- Componentes criados (todos em `src/components/`):
  - `AnimationProvider` (Lenis + GSAP + ScrollTrigger)
  - `Header` (transparente → blur ao scroll, menu mobile, CTA)
  - `Hero` (editorial 2 colunas, reveal palavra por palavra, parallax, scroll indicator)
  - `Marquee` (loop infinito com itens do produto)
  - `PainSection` (identificação; desktop com pin + revelação sequencial via progress; mobile com triggers por item)
  - `TransitionPhrase` (frase central com fade + scale)
  - `Transformation` (imagem parallax + conceitos numerados)
  - `Training` (módulos interativos; desktop hover/scroll + preview; mobile accordion)
  - `Build` (4 áreas: técnica, confiança, profissionalismo, carreira)
  - `Gallery` (duas linhas de imagens em direções opostas)
  - `ImpactPhrase` (frase de impacto + CTA)
  - `Audience` (para quem é, lista numerada)
  - `NotFor` (seção contrastante)
  - `Mentor` (autoridade com placeholders)
  - `Results` (galeria + placeholder de resultados reais)
  - `Testimonials` (marquee de depoimentos placeholder)
  - `Offer` (bloco premium, benefícios, preço placeholder, CTA→Kiwify, microcopy)
  - `FAQ` (accordion com respostas placeholder)
  - `FinalCTA` (encerramento com imagem forte)
  - `Footer` (navegação, contato, Kiwify)
  - `StickyCTA` (barra mobile aparece somente depois do usuário passar pela oferta)
- Animações: gsap.matchMedia desativa pin/parallax abaixo de 1024px.
- `next build` e `eslint` passando.
- Página e imagens servindo via `next start` (status 200).

## Pendente (dados reais do produto) + revisão
Onde estiver `[PLACEHOLDER]`, substituir por dados oficiais:
- `src/lib/constants.ts`: módulos do treinamento, benefícios/bônus, FAQ answers.
- Preço e parcelamento na seção Oferta (`offer-price`).
- Política de garantia (se existir).
- Informações da especialista (nome, anos de experiência, formações, conquistas, história).
- Depoimentos, prints, resultados reais de alunas.
- Mockup do treinamento na oferta.

## Pendente auditoria final (fase 2)
- Revisar visual desktop e mobile em navegador real (blur/glass e glows são mais pesados no mobile — confirmar aceitável).
- Confirmar que não houve alteração de textos, CTAs, links, ordem ou estrutura de conversão.
- Testar links e CTA→checkout Kiwify.

## Verificação final recomendada
- Revisar visual desktop e mobile em navegador real.
- Testar todos os links e CTA→checkout Kiwify.
- Substituir placeholders por conteúdo oficial antes de publicar.

## Como rodar
- Dev: `npm run dev`
- Build: `npm run build`
- Produção: `npm run start`