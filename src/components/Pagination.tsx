import { View } from 'react-native'
import Animated from 'react-native-reanimated'
import { twMerge } from 'tailwind-merge'

type PaginationProps = {
  total: number
  current: number
}

export const Pagination = ({ total, current }: PaginationProps) => {
  const dots = Array.from({ length: total })

  return (
    <View className='flex-row gap-2'>
      {dots.map((_, index) => (
        <Animated.View
          key={index}
          className={twMerge(
            'w-2 h-2 rounded-full bg-contrast-text',
            current === index && 'w-8'
          )}
          style={{
            width: current === index ? 24 : 8,
            transitionProperty: 'width',
            transitionDuration: 200
          }}
        />
      ))}
    </View>
  )
}
