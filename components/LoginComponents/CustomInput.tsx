import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React, { useEffect, useState } from "react";
import {
  ColorSchemeName,
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

const StyledTextInput = styled(TextInput);

type Props = TextInputProps & {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap;
  colorScheme: ColorSchemeName;
  isPassword?: boolean;
};

export const CustomInput = ({
  label,
  iconName,
  colorScheme,
  isPassword = false,
  ...textInputProps
}: Props) => {
  useEffect(() => {
    console.log("El valor es: ", textInputProps.value);
  }, [textInputProps.value]);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="space-y-2 mt-4">
      <Text
        className={`text-slate-600 font-medium ml-1 ${
          colorScheme === "dark" ? "text-slate-100" : "text-slate-800"
        }`}
      >
        {label}
      </Text>
      <View
        className={`flex-row items-center border rounded-2xl px-4 h-14 focus:border-indigo-500 ${
          colorScheme === "dark"
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <Ionicons name={iconName} size={20} color="#64748b" />
        <StyledTextInput
          {...textInputProps}
          className={`flex-1 ml-3 ${
            colorScheme === "dark" ? "text-slate-100" : "text-slate-800"
          }`}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#64748b"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};
