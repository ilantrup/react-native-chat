import AllServicesSection from "@/sections/AllServicesSection";
import React from "react";
import { useColorScheme, View } from "react-native";

export default function AllServicesScreen() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <AllServicesSection />
    </View>
  );
}
