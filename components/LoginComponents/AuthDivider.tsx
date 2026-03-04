import React from "react";
import { ColorSchemeName, Text, View } from "react-native";

export const AuthDivider = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) => (
  <View className="flex-row items-center my-4">
    <View
      className={`flex-1 ${colorScheme === "dark" ? "bg-slate-800" : "bg-slate-300"}`}
    />
    <Text
      className={`mx-4 text-sm ${colorScheme === "dark" ? "text-slate-400" : "text-slate-500"}`}
    >
      O continúa con
    </Text>
    <View
      className={`flex-1 ${colorScheme === "dark" ? "bg-slate-800" : "bg-slate-300"}`}
    />
  </View>
);
