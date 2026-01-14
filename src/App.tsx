import { Dimensions, FlatList, Text, View } from "react-native";

import { FullScreenBackground } from "./components/FullScreenBackground";
import { RoundedCardBackgorund } from "./components/RoundedCardBackground";
import { themes } from "./themes";
import "../global.css";

export default function App() {
  const themeOptions = [
    {
      name: "Charcoal",
      description: "Dark charcoal",
    },
    {
      name: "Winter",
      description: "Cool light blues",
    },
    {
      name: "Summer",
      description: "Warm summer colors",
    },
  ];

  const SCREEN_WIDTH = Dimensions.get("window").width;
  const CARD_WIDTH = SCREEN_WIDTH * 0.7;
  const CARD_SPACING = 20;

  return (
    <View style={themes["charcoal"]} className="flex-1">
      <FullScreenBackground colors={["#2a384a", "#111d28"]}>
        <FlatList
          data={themeOptions}
          keyExtractor={(item) => item.name}
          bounces={false}
          horizontal
          contentContainerClassName="items-center"
          contentContainerStyle={{
            paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
            gap: CARD_SPACING,
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: CARD_WIDTH,
                height: 280,
              }}
            >
              <RoundedCardBackgorund colors={["#111d28", "#2a384a"]}>
                <View className="w-full h-full border border-contrast rounded-3xl p-4 justify-between">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-contrast">01</Text>
                    <Text className="text-contrast">Theme 1</Text>
                  </View>
                  <View>
                    <Text className="text-contrast-text text-3xl font-bold">
                      {item.name}
                    </Text>
                    <Text className="text-contrast-text text-sm">
                      {item.description}
                    </Text>
                  </View>
                </View>
              </RoundedCardBackgorund>
            </View>
          )}
        />
      </FullScreenBackground>
    </View>
  );
}
