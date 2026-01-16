import { AppThemes } from "../themes";

export type Card = {
  theme: AppThemes;
  name: string;
  description: string;
};

export const cards: Card[] = [
  {
    theme: "charcoal",
    name: "Charcoal",
    description: "Dark charcoal",
  },
  {
    theme: "winter",
    name: "Winter",
    description: "Cool light blues",
  },
  {
    theme: "night",
    name: "Night",
    description: "Dark night colors",
  },
];
