interface SemanticToken {
  name: string;
  cssVar: string;
  hex: string;
  description: string;
  primitive: string;
  badgeColor: "blue" | "green" | "amber" | "red" | "neutral";
}

const BRAND_TOKENS: SemanticToken[] = [
  {
    name: "Primary",
    cssVar: "--color-primary",
    hex: "#2563EB",
    description: "Main brand blue — buttons, links, focus rings",
    primitive: "blue-600",
    badgeColor: "blue",
  },
  {
    name: "Primary hover",
    cssVar: "--color-primary-hover",
    hex: "#1D4ED8",
    description: "Hover state for primary interactive elements",
    primitive: "blue-700",
    badgeColor: "blue",
  },
  {
    name: "Primary subtle",
    cssVar: "--color-primary-subtle",
    hex: "#DBEAFE",
    description: "Tinted backgrounds, selected rows, active nav items",
    primitive: "blue-100",
    badgeColor: "blue",
  },
];

const STATUS_TOKENS: SemanticToken[] = [
  {
    name: "Success",
    cssVar: "--color-success",
    hex: "#16A34A",
    description: "Confirmations, completed states, positive values",
    primitive: "green-600",
    badgeColor: "green",
  },
  {
    name: "Warning",
    cssVar: "--color-warning",
    hex: "#D97706",
    description: "Caution states, degraded performance, pending",
    primitive: "amber-600",
    badgeColor: "amber",
  },
  {
    name: "Danger",
    cssVar: "--color-danger",
    hex: "#E11D48",
    description: "Errors, destructive actions, critical alerts",
    primitive: "red-600",
    badgeColor: "red",
  },
  {
    name: "Info",
    cssVar: "--color-info",
    hex: "#2563EB",
    description: "Informational callouts, tooltips, neutral notices",
    primitive: "blue-600",
    badgeColor: "blue",
  },
];

const SURFACE_TOKENS: SemanticToken[] = [
  {
    name: "Background",
    cssVar: "--color-bg",
    hex: "#ffffff",
    description: "Page background",
    primitive: "white / neutral-950",
    badgeColor: "neutral",
  },
  {
    name: "Surface",
    cssVar: "--color-bg-surface",
    hex: "#F5F5F5",
    description: "Cards, panels, sidebar backgrounds",
    primitive: "neutral-100",
    badgeColor: "neutral",
  },
  {
    name: "Text primary",
    cssVar: "--color-text-primary",
    hex: "#171717",
    description: "Headlines, body text, labels",
    primitive: "neutral-900",
    badgeColor: "neutral",
  },
  {
    name: "Text muted",
    cssVar: "--color-text-muted",
    hex: "#737373",
    description: "Captions, descriptions, placeholder text",
    primitive: "neutral-500",
    badgeColor: "neutral",
  },
  {
    name: "Border",
    cssVar: "--color-border",
    hex: "#E5E5E5",
    description: "Default border on inputs, cards, dividers",
    primitive: "neutral-200",
    badgeColor: "neutral",
  },
];

const badgeStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  green: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200",
  amber: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  red: "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200",
  neutral:
    "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

function Badge({
  children,
  color = "neutral",
}: {
  children: React.ReactNode;
  color?: keyof typeof badgeStyles;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium tracking-wide ${badgeStyles[color]}`}
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

function TokenRow({ token }: { token: SemanticToken }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
      <div
        className="w-7 h-7 rounded-md shrink-0 border border-neutral-200 dark:border-neutral-700"
        style={{ backgroundColor: token.hex }}
      />
      <span className="font-mono text-[12px] text-neutral-800 dark:text-neutral-200 w-55 shrink-0">
        {token.cssVar}
      </span>
      <span className="text-[12px] text-neutral-500 flex-1">
        {token.description}
      </span>
      <Badge color={token.badgeColor}>{token.primitive}</Badge>
    </div>
  );
}

export default function page() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          Global colors
        </h1>
        <p className="mt-2 text-[14px] text-neutral-500 max-w-xl leading-relaxed">
          This page documents every color token available in the design system.
          Use these tokens consistently across every component —{" "}
          <strong className="font-medium text-neutral-700 dark:text-neutral-300">
            never hardcode raw hex values
          </strong>{" "}
          in component files.
        </p>
      </div>

      <Divider />

      <section className="mb-10">
        <SectionLabel>Semantic tokens</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          Semantic color tokens
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-6 leading-relaxed">
          Semantic tokens map primitive colors to intent. Always prefer these
          over raw primitives — they automatically adapt between light and dark
          mode.
        </p>

        <div className="mb-8">
          <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Brand
          </p>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4">
            {BRAND_TOKENS.map((t) => (
              <TokenRow key={t.cssVar} token={t} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Status
          </p>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4">
            {STATUS_TOKENS.map((t) => (
              <TokenRow key={t.cssVar} token={t} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-[12px] font-medium text-neutral-400 uppercase tracking-widest mb-2">
            Surface &amp; text
          </p>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl px-4">
            {SURFACE_TOKENS.map((t) => (
              <TokenRow key={t.cssVar} token={t} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* CSS definition */}
      <section className="mb-10">
        <SectionLabel>Implementation</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          globals.css definition
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-4 leading-relaxed">
          Paste this into your <InlineCode>globals.css</InlineCode>. Tokens are
          defined per theme — the <InlineCode>dark</InlineCode> class on{" "}
          <InlineCode>&lt;html&gt;</InlineCode> swaps them automatically via
          Tailwind&apos;s class-based dark mode strategy.
        </p>

        <pre className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 text-[12px] font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-7 whitespace-pre">
          {`/* ─── Primitive palette ─────────────────────────── */
:root {
  /* Blue */
  --color-blue-50:  #EFF6FF;
  --color-blue-100: #DBEAFE;
  --color-blue-500: #3B82F6;
  --color-blue-600: #2563EB;
  --color-blue-700: #1D4ED8;

  /* Green */
  --color-green-50:  #F0FDF4;
  --color-green-100: #DCFCE7;
  --color-green-600: #16A34A;

  /* Red */
  --color-red-50:  #FFF1F2;
  --color-red-100: #FFE4E6;
  --color-red-600: #E11D48;

  /* Amber */
  --color-amber-50:  #FFFBEB;
  --color-amber-100: #FEF3C7;
  --color-amber-600: #D97706;

  /* Neutral */
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-500: #737373;
  --color-neutral-900: #171717;
  --color-neutral-950: #0A0A0A;
}

/* ─── Semantic tokens — Light mode ──────────────── */
:root {
  --color-primary:        var(--color-blue-600);
  --color-primary-hover:  var(--color-blue-700);
  --color-primary-subtle: var(--color-blue-100);

  --color-success:  var(--color-green-600);
  --color-warning:  var(--color-amber-600);
  --color-danger:   var(--color-red-600);
  --color-info:     var(--color-blue-600);

  --color-bg:           #ffffff;
  --color-bg-surface:   var(--color-neutral-100);
  --color-text-primary: var(--color-neutral-900);
  --color-text-muted:   var(--color-neutral-500);
  --color-border:       var(--color-neutral-200);
}

/* ─── Semantic tokens — Dark mode ───────────────── */
.dark {
  --color-primary:        #60A5FA; /* blue-400 */
  --color-primary-hover:  #93C5FD; /* blue-300 */
  --color-primary-subtle: #1E3A8A; /* blue-900 */

  --color-success:  #4ADE80;
  --color-warning:  #FBBF24;
  --color-danger:   #FB7185;
  --color-info:     #60A5FA;

  --color-bg:           var(--color-neutral-950);
  --color-bg-surface:   #1C1C1C;
  --color-text-primary: #FAFAFA;
  --color-text-muted:   var(--color-neutral-500);
  --color-border:       #2A2A2A;
}`}
        </pre>
      </section>

      <Divider />

      {/* Tailwind usage */}
      <section className="mb-10">
        <SectionLabel>Usage</SectionLabel>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          Usage in Tailwind
        </h2>
        <p className="text-[13.5px] text-neutral-500 mb-4 leading-relaxed">
          Extend your <InlineCode>tailwind.config.ts</InlineCode> to expose
          semantic tokens as utility classes, then use them in JSX directly.
        </p>

        <pre className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 text-[12px] font-mono text-neutral-800 dark:text-neutral-200 overflow-x-auto leading-7 whitespace-pre mb-4">
          {`// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary:      "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        success:      "var(--color-success)",
        warning:      "var(--color-warning)",
        danger:       "var(--color-danger)",
        border:       "var(--color-border)",
        bg:           "var(--color-bg)",
        surface:      "var(--color-bg-surface)",
        "text-base":  "var(--color-text-primary)",
        "text-muted": "var(--color-text-muted)",
      },
    },
  },
}

export default config`}
        </pre>
      </section>
    </main>
  );
}
