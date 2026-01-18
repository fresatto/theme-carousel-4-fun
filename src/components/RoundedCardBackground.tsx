import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

type RoundedCardBackgorundProps = LinearGradientProps & {
  children: React.ReactNode
}

export function RoundedCardBackgorund ({
  children,
  colors,
  ...rest
}: RoundedCardBackgorundProps) {
  return (
    <LinearGradient
      colors={colors}
      locations={[0.5, 0.1]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 24
      }}
      {...rest}
    >
      {children}
    </LinearGradient>
  )
}
