import { SemanticToken } from "@/app/pages/global-colors/page";

export const BRAND_TOKENS: SemanticToken[] = [
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

export const STATUS_TOKENS: SemanticToken[] = [
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

export const SURFACE_TOKENS: SemanticToken[] = [
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

export const badgeStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  green: "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200",
  amber: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  red: "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200",
  neutral:
    "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};
