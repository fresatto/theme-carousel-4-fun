import {
  useAnimatedProps,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { AppThemes } from '../../../themes'
import { LinearGradientProps } from 'expo-linear-gradient'
import { colors } from '../../../themes/colors'

const THEME_COLORS: Record<AppThemes, [string, string]> = {
  charcoal: [colors.charcoal.primary, colors.charcoal.secondary],
  winter: [colors.winter.primary, colors.winter.secondary],
  night: [colors.night.primary, colors.night.secondary]
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
