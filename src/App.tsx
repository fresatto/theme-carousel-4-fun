import { Text, View } from "react-native";

import { FullScreenBackground } from "./components/FullScreenBackground";
import { RoundedCardBackgorund } from "./components/RoundedCardBackground";
import { themes } from "./themes";
import "../global.css";

export default function App() {
  return (
    <View style={themes["charcoal"]} className="flex-1 bg-red-300">
      <FullScreenBackground colors={["#2a384a", "#111d28"]}>
        <RoundedCardBackgorund colors={["#111d28", "#2a384a"]}>
          <View className="w-[200px] h-[200px] border border-contrast rounded-3xl p-4 justify-between">
            <View className="flex-row items-center justify-between">
              <Text className="text-contrast">01</Text>
              <Text className="text-contrast">Theme 1</Text>
            </View>
            <View>
              <Text className="text-contrast-text text-3xl font-bold">
                Charcoal
              </Text>
              <Text className="text-contrast-text text-sm">Dark charcoal</Text>
            </View>
          </View>
        </RoundedCardBackgorund>
      </FullScreenBackground>
    </View>
  );
}
