import React from "react";
import { ColorSchemeName, Text, View } from "react-native";

type Props = {
  colorScheme: ColorSchemeName;
  title?: string;
  subtitle?: string;
};

export const AuthHeader = ({
  colorScheme,
  title = "¡Hola de nuevo!",
  subtitle = "Ingresa tus datos para continuar",
}: Props) => {
  return (
    <View className="mb-10">
      <Text
        className={`text-3xl font-bold ${
          colorScheme === "dark" ? "text-slate-100" : "text-slate-800"
        } text-center`}
      >
        {title}
      </Text>
      <Text
        className={`text-slate-500 text-center mt-2 text-base ${
          colorScheme === "dark" ? "text-slate-100" : "text-slate-800"
        }`}
      >
        {subtitle}
      </Text>
    </View>
  );
};
