export interface FontFamily {
  name: string;
  cssVar: string;
  role: string;
  badge: string;
  badgeColor: string;
  specimen: string;
  specimenNote: string;
  weights: { label: string; style?: string; weight: number }[];
  isItalicSpecimen?: boolean;
}

export interface TypeScaleToken {
  token: string;
  size: string;
  px: string;
  lineHeight: string;
  usage: string;
}

export interface FontPairing {
  label: string;
  description: string;
  tokenNote: string;
}
