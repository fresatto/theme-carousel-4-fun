import { Text, View } from 'react-native'
import { AppThemes } from '../themes'
import { RoundedCardBackgorund } from './RoundedCardBackground'
import { tv } from 'tailwind-variants'
import { useThemeGradient } from '../hooks/useThemeGradient'

type CardThemeProps = {
  theme: AppThemes
  name: string
  description: string
}

const variants = tv({
  slots: {
    root: 'w-full h-full border rounded-3xl p-4 justify-between',
    headerText: 'text-gray-500 text-sm',
    name: 'text-contrast-text text-3xl font-bold',
    description: 'text-contrast-text text-sm'
  },
  variants: {
    theme: {
      charcoal: {
        root: 'border-charcoal-contrast',
        headerText: 'text-charcoal-contrast-text',
        name: 'text-charcoal-contrast-text text-3xl font-bold',
        description: 'text-charcoal-contrast-text text-sm'
      },
      winter: {
        root: 'border-gray-400',
        headerText: 'text-winter-contrast-text',
        name: 'text-winter-contrast-text text-3xl font-bold',
        description: 'text-winter-contrast-text text-sm'
      },
      night: {
        root: 'border-night-contrast',
        headerText: 'text-night-contrast-text',
        name: 'text-night-contrast-text text-3xl font-bold',
        description: 'text-night-contrast-text text-sm'
      }
    }
  }
})

export const CardTheme = ({ theme, name, description }: CardThemeProps) => {
  const styles = variants({ theme })
  const { from, to } = useThemeGradient(theme)

  return (
    <RoundedCardBackgorund colors={[from, to]}>
      <View className={styles.root()}>
        <View className='flex-row items-center justify-between'>
          <Text className={styles.headerText()}>01</Text>
          <Text className={styles.headerText()}>Theme 1</Text>
        </View>
        <View>
          <Text className={styles.name()}>{name}</Text>
          <Text className={styles.description()}>{description}</Text>
        </View>
      </View>
    </RoundedCardBackgorund>
  )
}
