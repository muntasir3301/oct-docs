import {
  FONT_FAMILIES,
  FONT_PAIRINGS,
  TYPE_SCALE,
} from "@/app/lib/global-fonts/GlobalFonts";
import { FontFamily } from "@/app/types/GlobalFonts";

const badgeStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  purple:
    "bg-violet-50 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
  teal: "bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-200",
  neutral:
    "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

function Badge({
  children,
  color = "neutral",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium tracking-wide ${badgeStyles[color] ?? badgeStyles.neutral}`}
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-400 mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return (
    <hr className="border-0 border-t border-neutral-200 dark:border-neutral-800 my-10" />
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-[12px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-1.5 py-0.5 rounded font-mono">
      {children}
    </code>
  );
}

const fontFamilyMap: Record<string, string> = {
  "Geist Sans": "font-sans",
  "Geist Mono": "font-mono",
  Lora: "font-serif",
};

function FontFamilyCard({ font }: { font: FontFamily }) {
  const fontClass = fontFamilyMap[font.name] ?? "font-sans";

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-950">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2.5">
          <span className="text-[13px] font-medium text-neutral-900 dark:text-neutral-100">
            {font.name}
          </span>
          <Badge color={font.badgeColor}>{font.badge}</Badge>
        </div>
        <div className="flex gap-2">
          <Badge color="neutral">{font.cssVar}</Badge>
          <Badge color="neutral">{font.role}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-5">
        <p
          className={`${fontClass} text-[32px] leading-[1.2] font-normal text-neutral-900 dark:text-neutral-100 mb-3 ${
            font.isItalicSpecimen ? "italic" : ""
          }`}
        >
          {font.specimen}
        </p>
        <p
          className={`${fontClass} text-[13.5px] leading-relaxed text-neutral-500 mb-5`}
        >
          {font.specimenNote}
        </p>

        {/* Weight row */}
        <div className="flex flex-wrap gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
          {font.weights.map((w) => (
            <div key={w.label} className="flex flex-col gap-1">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                {w.label}
              </span>
              <span
                className={`${fontClass} text-[18px] text-neutral-900 dark:text-neutral-100`}
                style={{ fontWeight: w.weight, fontStyle: w.style ?? "normal" }}
              >
                {font.name === "Geist Mono"
                  ? "--color-primary"
                  : font.isItalicSpecimen && w.style === "italic"
                    ? "Pull quotes"
                    : "Sample text"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <main className="">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          Global fonts
        </h1>
        <p className="mt-2 text-[14px] text-neutral-500 max-w-xl leading-relaxed">
          This page documents the typography system — font families, weights,
          scale tokens, and usage rules. Consistent type is the foundation of a
          professional interface.{" "}
          <strong className="font-medium text-neutral-700 dark:text-neutral-300">
            Always use CSS tokens, never hardcode font stacks in components.
          </strong>
        </p>
      </div>

      <Divider />

      {/* Font families */}
      <section className="mb-10">
        <SectionLabel>Font families</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          Type specimens
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-6 leading-relaxed">
          Three font families make up the system. Each has a defined role —
          mixing outside these roles breaks visual consistency across the
          product.
        </p>
        <div className="flex flex-col gap-4">
          {FONT_FAMILIES.map((font) => (
            <FontFamilyCard key={font.name} font={font} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Type scale */}
      <section className="mb-10">
        <SectionLabel>Type scale</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          Size & line-height tokens
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-5 leading-relaxed">
          A fixed type scale keeps visual rhythm consistent. Always use these
          tokens — never arbitrary font sizes like{" "}
          <InlineCode>font-size: 15px</InlineCode>.
        </p>

        <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[180px_70px_100px_1fr] px-4 py-2.5 bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
            {["Token", "Size", "Line height", "Usage"].map((h) => (
              <span
                key={h}
                className="text-[11px] font-medium text-neutral-400 uppercase tracking-widest"
              >
                {h}
              </span>
            ))}
          </div>

          {TYPE_SCALE.map((row, i) => (
            <div
              key={row.token}
              className={`grid grid-cols-[180px_70px_100px_1fr] px-4 py-3 items-center ${
                i < TYPE_SCALE.length - 1
                  ? "border-b border-neutral-100 dark:border-neutral-800"
                  : ""
              }`}
            >
              <span className="font-mono text-[12px] text-neutral-800 dark:text-neutral-200">
                {row.token}
              </span>
              <div>
                <span className="font-mono text-[12px] text-neutral-600 dark:text-neutral-400">
                  {row.size}
                </span>
                <span className="block font-mono text-[10px] text-neutral-400">
                  {row.px}
                </span>
              </div>
              <span className="font-mono text-[12px] text-neutral-500">
                {row.lineHeight}
              </span>
              <span className="text-[12.5px] text-neutral-500">
                {row.usage}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* globals.css */}
      <section className="mb-10">
        <SectionLabel>Implementation</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          globals.css definition
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-4 leading-relaxed">
          Paste this into your <InlineCode>globals.css</InlineCode>. The{" "}
          <InlineCode>@import</InlineCode> must be the very first line in the
          file.
        </p>

        <pre className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 text-[12px] font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-7 whitespace-pre">
          {`/* ─── Google Fonts import ───────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&famlay=swap');

/* ─── Font family tokens ────────────────────────── */
:root {
  --font-sans:  'Geist', system-ui, sans-serif;
  --font-mono:  'Geist Mono', 'Courier New', monospace;
  --font-serif: 'Lora', Georgia, serif;
}

/* ─── Type scale tokens ─────────────────────────── */
:root {
  --text-xs:   0.6875rem; /* 11px */
  --text-sm:   0.8125rem; /* 13px */
  --text-base: 0.875rem;  /* 14px */
  --text-md:   1rem;      /* 16px */
  --text-lg:   1.25rem;   /* 20px */
  --text-xl:   1.5rem;    /* 24px */
  --text-2xl:  2rem;      /* 32px */
}

/* ─── Base styles ───────────────────────────────── */
html {
  font-family:             var(--font-sans);
  font-size:               var(--text-base);
  line-height:             1.65;
  -webkit-font-smoothing:  antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code, kbd, pre, samp {
  font-family: var(--font-mono);
}`}
        </pre>
      </section>

      <Divider />

      {/* Tailwind config */}
      <section className="mb-10">
        <SectionLabel>Tailwind config</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          Extending Tailwind
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-4 leading-relaxed">
          Extend <InlineCode>tailwind.config.ts</InlineCode> so tokens become
          utility classes like <InlineCode>font-sans</InlineCode>,{" "}
          <InlineCode>text-sm</InlineCode>, and <InlineCode>text-xl</InlineCode>
          .
        </p>

        <pre className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 text-[12px] font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-7 whitespace-pre">
          {`// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Geist', 'system-ui', 'sans-serif'],
        mono:  ['Geist Mono', 'Courier New', 'monospace'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        xs:    ['11px', { lineHeight: '1.5' }],
        sm:    ['13px', { lineHeight: '1.6' }],
        base:  ['14px', { lineHeight: '1.65' }],
        md:    ['16px', { lineHeight: '1.6' }],
        lg:    ['20px', { lineHeight: '1.4' }],
        xl:    ['24px', { lineHeight: '1.3' }],
        '2xl': ['32px', { lineHeight: '1.2' }],
      },
    },
  },
}

export default config`}
        </pre>

        <p className="text-[13px] text-neutral-500 mt-4 mb-3">
          Then in your components:
        </p>

        <pre className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 text-[12px] font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-7 whitespace-pre">
          {`// ✅ Correct — token-based, works everywhere
<h1 className="font-sans text-xl font-medium text-neutral-900">Page title</h1>
<code className="font-mono text-sm">--color-primary</code>
<blockquote className="font-serif italic text-lg">Pull quote here</blockquote>

// ❌ Wrong — hardcoded, breaks the system
<h1 style={{ fontFamily: 'Geist', fontSize: '24px' }}>Page title</h1>`}
        </pre>
      </section>

      <Divider />

      {/* Font pairings */}
      <section className="mb-10">
        <SectionLabel>Font pairings</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          Recommended pairings
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-5 leading-relaxed">
          These three patterns cover every layout scenario. Never combine more
          than two font families on a single screen.
        </p>

        <div className="flex flex-col gap-4">
          {FONT_PAIRINGS.map((p) => (
            <div
              key={p.label}
              className="border border-neutral-200 dark:border-neutral-800 rounded-xl px-5 py-5 bg-white dark:bg-neutral-950"
            >
              <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-widest mb-3">
                {p.label}
              </p>
              <p className="text-[13.5px] text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                {p.description}
              </p>
              <InlineCode>{p.tokenNote}</InlineCode>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
