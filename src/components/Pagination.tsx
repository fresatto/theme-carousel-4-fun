import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
  total: number;
  current: number;
};

export const Pagination = ({ total, current }: PaginationProps) => {
  const dots = Array.from({ length: total });

  return (
    <View className="flex-row gap-2">
      {dots.map((_, index) => (
        <View
          key={index}
          className={twMerge(
            "w-2 h-2 rounded-full bg-white",
            current === index && "w-8"
          )}
        />
      ))}
    </View>
  );
};
