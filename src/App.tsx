import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, View } from "react-native";
import { FullScreenBackground } from "./components/FullScreenBackground";
import { Pagination } from "./components/Pagination";
import { themes } from "./themes";
import { CardTheme } from "./components/CardTheme";

import "../global.css";
import { cards } from "./constants/cards";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SCREEN_WIDTH = Dimensions.get("window").width;
  const CARD_WIDTH = SCREEN_WIDTH * 0.7;
  const CARD_SPACING = 20;

  const currentTheme = currentIndex % 2 === 0 ? "charcoal" : "winter";

  return (
    <View style={themes[currentTheme]} className="flex-1">
      <StatusBar style="light" />
      <FullScreenBackground colors={["#2a384a", "#111d28"]}>
        <View className="gap-8 items-center">
          <FlatList
            data={cards}
            keyExtractor={(item) => item.name}
            bounces={false}
            scrollEventThrottle={16}
            onViewableItemsChanged={({ changed }) => {
              const visibleItem = changed.find((item) => item.isViewable);

              if (visibleItem) {
                setCurrentIndex(visibleItem.index as number);
              }
            }}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 100,
            }}
            horizontal
            contentContainerClassName="items-center"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
              gap: CARD_SPACING,
            }}
            decelerationRate="fast"
            snapToInterval={CARD_WIDTH + CARD_SPACING}
            renderItem={({ item }) => (
              <View
                style={{
                  width: CARD_WIDTH,
                  height: 280,
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
      </FullScreenBackground>
    </View>
  );
}
