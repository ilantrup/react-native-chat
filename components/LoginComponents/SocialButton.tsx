import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React from "react";
import { ColorSchemeName, Pressable, Text } from "react-native";

const StyledPressable = styled(Pressable);

type Props = {
  provider: "Google" | "Apple"; // Expandible
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  colorScheme: ColorSchemeName;
};

export const SocialButton = ({
  provider,
  iconName,
  onPress,
  colorScheme,
}: Props) => {
  return (
    <StyledPressable
      onPress={onPress}
      className={`flex-row items-center justify-center h-14 rounded-2xl ${
        colorScheme === "dark" ? "bg-slate-800" : "bg-slate-200"
      } active:bg-slate-300`}
    >
      <Ionicons
        name={iconName}
        size={20}
        color={colorScheme === "dark" ? "white" : "black"}
        style={{ marginRight: 12 }}
      />
      <Text
        className={`font-bold text-lg ${
          colorScheme === "dark" ? "text-white" : "text-slate-800"
        }`}
      >
        {provider}
      </Text>
    </StyledPressable>
  );
};
