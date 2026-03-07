import { useAuthStore } from "@/store/authStore";
import { RoleEnum } from "@/types/UserTypes";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function ProtectedIndex() {
  const { userInfo } = useAuthStore();

  if (!userInfo) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Despachar al paciente
  if (userInfo.role === RoleEnum.PATIENT || userInfo.role === undefined) {
    return <Redirect href="/(protected)/(patient)" />;
  }

  // Despachar al doctor
  if (userInfo.role === RoleEnum.DOCTOR) {
    return <Redirect href="/(protected)/(doctor)" />;
  }

  return (
    <View className="flex-1 justify-center items-center px-4">
      <Text className="text-red-500 text-center">
        Error: Rol de usuario no reconocido.
      </Text>
      <Text>{JSON.stringify(userInfo)}</Text>
    </View>
  );
}
