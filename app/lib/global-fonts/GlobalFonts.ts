import {
  FontFamily,
  FontPairing,
  TypeScaleToken,
} from "@/app/types/GlobalFonts";

export const FONT_FAMILIES: FontFamily[] = [
  {
    name: "Geist Sans",
    cssVar: "--font-sans",
    role: "UI / body",
    badge: "Primary",
    badgeColor: "blue",
    specimen: "The quick brown fox jumps over the lazy dog.",
    specimenNote:
      "Geist is designed for developer tools and clean interfaces. It has a neutral, geometric character with excellent legibility at small sizes — ideal for labels, body copy, navigation, and all UI text.",
    weights: [
      { label: "400 — Regular", weight: 400 },
      { label: "500 — Medium", weight: 500 },
      { label: "600 — Semibold", weight: 600 },
    ],
  },
  {
    name: "Geist Mono",
    cssVar: "--font-mono",
    role: "Code / tokens",
    badge: "Monospace",
    badgeColor: "purple",
    specimen: 'const color = "#2563EB";',
    specimenNote:
      "Used exclusively for code blocks, CSS variable names, hex values, API keys, and any machine-readable content. Never used for prose or UI labels.",
    weights: [
      { label: "400 — Regular", weight: 400 },
      { label: "500 — Medium", weight: 500 },
    ],
  },
  {
    name: "Lora",
    cssVar: "--font-serif",
    role: "Editorial / rare",
    badge: "Serif",
    badgeColor: "teal",
    specimen: '"Good typography is invisible."',
    specimenNote:
      "Reserved for editorial moments only — pull quotes, testimonials, hero taglines, or marketing copy that needs warmth and humanity. Never used in UI controls, tables, or navigation.",
    isItalicSpecimen: true,
    weights: [
      { label: "400 — Regular", weight: 400 },
      { label: "400 Italic", weight: 400, style: "italic" },
      { label: "500 — Medium", weight: 500 },
    ],
  },
];

export const TYPE_SCALE: TypeScaleToken[] = [
  {
    token: "--text-xs",
    size: "0.6875rem",
    px: "11px",
    lineHeight: "1.5",
    usage: "Labels, badges, captions, timestamps",
  },
  {
    token: "--text-sm",
    size: "0.8125rem",
    px: "13px",
    lineHeight: "1.6",
    usage: "Table cells, descriptions, helper text",
  },
  {
    token: "--text-base",
    size: "0.875rem",
    px: "14px",
    lineHeight: "1.65",
    usage: "Default body text, form inputs, nav items",
  },
  {
    token: "--text-md",
    size: "1rem",
    px: "16px",
    lineHeight: "1.6",
    usage: "Card headings, section titles, modal headers",
  },
  {
    token: "--text-lg",
    size: "1.25rem",
    px: "20px",
    lineHeight: "1.4",
    usage: "Page titles, panel headings",
  },
  {
    token: "--text-xl",
    size: "1.5rem",
    px: "24px",
    lineHeight: "1.3",
    usage: "Dashboard metrics, large headings",
  },
  {
    token: "--text-2xl",
    size: "2rem",
    px: "32px",
    lineHeight: "1.2",
    usage: "Hero headlines, marketing sections only",
  },
];

export const FONT_PAIRINGS: FontPairing[] = [
  {
    label: "Pattern 1 — Default UI",
    description:
      "All headings, body copy, labels, and controls use Geist Sans. Most product pages, settings, dashboards, and data views fall into this pattern.",
    tokenNote: "font-sans + font-sans",
  },
  {
    label: "Pattern 2 — Code & Tokens",
    description:
      "Labels and descriptions use Geist Sans; any token name, hex value, key, or code snippet switches to Geist Mono. The contrast between proportional and monospaced text signals 'this is machine data'.",
    tokenNote: "font-sans label + font-mono value",
  },
  {
    label: "Pattern 3 — Editorial / Marketing",
    description:
      "Pull quotes and hero taglines use Lora italic for warmth and humanity. Attribution, body context, and supporting UI around it remain in Geist Sans. Never use this pattern inside product UI screens.",
    tokenNote: "font-serif quote + font-sans attribution",
  },
];
