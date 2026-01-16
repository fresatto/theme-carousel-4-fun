import { vars } from "nativewind";
import { colors } from "./colors";

type Themes = "charcoal" | "winter";

export const themes: Record<Themes, ReturnType<typeof vars>> = {
  charcoal: vars({
    "--color-gradient-from": colors.charcoal.secondary,
    "--color-gradient-to": colors.charcoal.primary,
    "--color-contrast": colors.charcoal.contrast,
    "--color-contrast-text": colors.charcoal.contrastText,
  }),
  winter: vars({
    "--color-gradient-from": colors.winter.primary,
    "--color-gradient-to": colors.winter.secondary,
    "--color-contrast": colors.winter.contrast,
    "--color-contrast-text": colors.winter.contrastText,
  }),
};
