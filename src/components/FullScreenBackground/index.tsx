import { LinearGradient } from 'expo-linear-gradient'
import { AppThemes } from '../../themes'
import Animated from 'react-native-reanimated'
import { useBackgroundAnimation } from './hooks/useBackgroundAnimation'

type FullScreenBackgroundProps = {
  currentAppTheme: AppThemes
  children: React.ReactNode
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export function FullScreenBackground ({
  currentAppTheme,
  children
}: FullScreenBackgroundProps) {
  const { linearGradientAnimatedProps } =
    useBackgroundAnimation(currentAppTheme)

  return (
    <AnimatedLinearGradient
      colors={linearGradientAnimatedProps.colors!}
      animatedProps={linearGradientAnimatedProps}
      locations={[0.1, 0.7]}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      {children}
    </AnimatedLinearGradient>
  )
}
