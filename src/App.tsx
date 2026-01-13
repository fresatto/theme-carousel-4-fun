import { Text, View } from "react-native";
import { themes } from "./themes";
import { useState } from "react";

import "../global.css";

export default function App() {
  return (
    <View style={themes["charcoal"]} className="flex-1">
      <View className="flex-1 bg-gradient-from">
        <View className="flex-1 items-center justify-center">
          {/* Quadrado */}
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
        </View>
      </View>
    </View>
  );
}
