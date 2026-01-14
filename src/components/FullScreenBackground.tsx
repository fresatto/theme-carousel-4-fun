import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

type FullScreenBackgroundProps = LinearGradientProps & {
  children: React.ReactNode;
};

export function FullScreenBackground({
  children,
  colors,
}: FullScreenBackgroundProps) {
  return (
    <LinearGradient
      colors={colors}
      locations={[0.1, 0.7]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </LinearGradient>
  );
}
