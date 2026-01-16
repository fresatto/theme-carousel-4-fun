import { LinearGradient } from "expo-linear-gradient";
import { AppThemes } from "../themes";
import { useThemeGradient } from "../hooks/useThemeGradient";

type FullScreenBackgroundProps = {
  currentAppTheme: AppThemes;
  children: React.ReactNode;
};

export function FullScreenBackground({
  currentAppTheme,
  children,
}: FullScreenBackgroundProps) {
  const { from, to } = useThemeGradient(currentAppTheme);

  return (
    <LinearGradient
      colors={[from, to]}
      locations={[0.1, 0.7]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      {children}
    </LinearGradient>
  );
}
