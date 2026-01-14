import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

type RoundedCardBackgorundProps = LinearGradientProps & {
  children: React.ReactNode;
};

export function RoundedCardBackgorund({
  children,
  colors,
}: RoundedCardBackgorundProps) {
  return (
    <LinearGradient
      colors={colors}
      locations={[0.5, 0.1]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#283d4c",
        borderRadius: 24,
      }}
    >
      {children}
    </LinearGradient>
  );
}
