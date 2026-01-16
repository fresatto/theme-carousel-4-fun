import { vars } from "nativewind";
import { colors } from "./colors";

export type AppThemes = "charcoal" | "winter" | "night";

export const themes: Record<AppThemes, ReturnType<typeof vars>> = {
  charcoal: vars({
    "--color-gradient-from": colors.charcoal.secondary,
    "--color-gradient-to": colors.charcoal.primary,
    "--color-contrast": colors.charcoal.contrast,
    "--color-contrast-text": colors.charcoal["contrast-text"],
  }),
  winter: vars({
    "--color-gradient-from": colors.winter.primary,
    "--color-gradient-to": colors.winter.secondary,
    "--color-contrast": colors.winter.contrast,
    "--color-contrast-text": colors.winter["contrast-text"],
  }),
  night: vars({
    "--color-gradient-from": colors.night.primary,
    "--color-gradient-to": colors.night.secondary,
    "--color-contrast": colors.night.contrast,
    "--color-contrast-text": colors.night["contrast-text"],
  }),
};
