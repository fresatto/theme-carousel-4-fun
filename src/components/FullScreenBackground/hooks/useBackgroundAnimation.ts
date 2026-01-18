import {
  useAnimatedProps,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { AppThemes } from '../../../themes'
import { LinearGradientProps } from 'expo-linear-gradient'

const THEME_COLORS: Record<AppThemes, [string, string]> = {
  charcoal: ['#111d28', '#2a384a'],
  winter: ['#E0E8FC', '#AEC4DF'],
  night: ['#0B2633', '#224C5C']
}

type LinearGradientColorsProp = Pick<LinearGradientProps, 'colors'>

export function useBackgroundAnimation (currentAppTheme: AppThemes) {
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
      colors: [
        fromAnimatedValue.value,
        toAnimatedValue.value
      ] as LinearGradientColorsProp['colors']
    }
  })

  return {
    linearGradientAnimatedProps
  }
}
