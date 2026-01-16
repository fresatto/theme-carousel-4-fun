import { ColorValue } from "react-native";
import { AppThemes } from "../themes";
import { colors } from "../themes/colors";

const { charcoal, winter, night } = colors;

export const useThemeGradient = (theme: AppThemes) => {
  const gradients: Record<AppThemes, [ColorValue, ColorValue]> = {
    charcoal: [charcoal.primary, charcoal.secondary],
    winter: [winter.primary, winter.secondary],
    night: [night.primary, night.secondary],
  };

  const [from, to] = gradients[theme];

  return { from, to };
};
