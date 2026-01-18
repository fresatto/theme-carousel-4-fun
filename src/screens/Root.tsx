import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FullScreenBackground } from '../components/FullScreenBackground'
import { Pagination } from '../components/Pagination'
import { AppThemes, themes } from '../themes'
import { CardTheme } from '../components/CardTheme'
import { cards } from '../constants/cards'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Root () {
  const { bottom } = useSafeAreaInsets()
  const [currentIndex, setCurrentIndex] = useState(0)

  const SCREEN_WIDTH = Dimensions.get('window').width
  const CARD_WIDTH = SCREEN_WIDTH * 0.7
  const CARD_SPACING = 20

  const appThemesByIndex: Record<number, AppThemes> = {
    0: 'charcoal',
    1: 'winter',
    2: 'night'
  }

  const currentTheme = appThemesByIndex[currentIndex]

  return (
    <View style={themes[currentTheme]} className='flex-1'>
      <StatusBar style={currentTheme === 'winter' ? 'dark' : 'light'} />
      <FullScreenBackground currentAppTheme={currentTheme as AppThemes}>
        <View className='flex-1 items-center justify-center gap-8'>
          <FlatList
            data={cards}
            keyExtractor={item => item.name}
            bounces={false}
            scrollEventThrottle={16}
            onViewableItemsChanged={({ changed }) => {
              const visibleItem = changed.find(item => item.isViewable)

              if (visibleItem) {
                setCurrentIndex(visibleItem.index as number)
              }
            }}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 100
            }}
            className='h-[280px] flex-grow-0'
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
              gap: CARD_SPACING
            }}
            decelerationRate='fast'
            snapToInterval={CARD_WIDTH + CARD_SPACING}
            renderItem={({ item }) => (
              <View
                style={{
                  width: CARD_WIDTH,
                  height: 280
                }}
              >
                <CardTheme
                  theme={item.theme}
                  name={item.name}
                  description={item.description}
                />
              </View>
            )}
          />
          <Pagination total={cards.length} current={currentIndex} />
        </View>
        <TouchableOpacity
          className='w-full bg-contrast-text p-4 rounded-lg'
          style={{ paddingBottom: bottom }}
        >
          <Text>Set theme</Text>
        </TouchableOpacity>
      </FullScreenBackground>
    </View>
  )
}
