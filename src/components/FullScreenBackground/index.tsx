import { LinearGradient } from 'expo-linear-gradient'
import { AppThemes } from '../../themes'
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useEffect } from 'react'

type FullScreenBackgroundProps = {
  currentAppTheme: AppThemes
  children: React.ReactNode
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

const THEME_COLORS: Record<AppThemes, [string, string]> = {
  charcoal: ['#111d28', '#2a384a'],
  winter: ['#E0E8FC', '#AEC4DF'],
  night: ['#0B2633', '#224C5C']
}

export function FullScreenBackground ({
  currentAppTheme,
  children
}: FullScreenBackgroundProps) {
  const [from, to] = THEME_COLORS[currentAppTheme]

  const fromAnimatedValue = useSharedValue(from)
  const toAnimatedValue = useSharedValue(to)

  useEffect(() => {
    const newColors = THEME_COLORS[currentAppTheme]

    fromAnimatedValue.value = withTiming(newColors[0], { duration: 200 })
    toAnimatedValue.value = withTiming(newColors[1], { duration: 200 })
  }, [currentAppTheme])

  const linearGradientAnimatedProps = useAnimatedProps(() => {
    return {
      colors: [fromAnimatedValue.value, toAnimatedValue.value]
    }
  })

  return (
    <AnimatedLinearGradient
      animatedProps={linearGradientAnimatedProps}
      locations={[0.1, 0.7]}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      {children}
    </AnimatedLinearGradient>
  )
}
