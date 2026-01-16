import { Text, View } from "react-native";
import { AppThemes } from "../themes";
import { RoundedCardBackgorund } from "./RoundedCardBackground";

type CardThemeProps = {
  theme: AppThemes;
  name: string;
  description: string;
};

export const CardTheme = ({ name, description }: CardThemeProps) => {
  return (
    <RoundedCardBackgorund colors={["#111d28", "#2a384a"]}>
      <View className="w-full h-full border border-contrast rounded-3xl p-4 justify-between">
        <View className="flex-row items-center justify-between">
          <Text className="text-contrast">01</Text>
          <Text className="text-contrast">Theme 1</Text>
        </View>
        <View>
          <Text className="text-contrast-text text-3xl font-bold">{name}</Text>
          <Text className="text-contrast-text text-sm">{description}</Text>
        </View>
      </View>
    </RoundedCardBackgorund>
  );
};
