import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "@/store/authStore";

export default function LoginScreen() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Logueando con:", email, password);
    login(email, password);
    router.replace("/");
  };

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerBackButtonDisplayMode: "minimal",
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center px-6"
      >
        <View className="mb-10">
          <Text className="text-3xl font-bold text-slate-800 text-center">
            ¡Hola de nuevo!
          </Text>
          <Text className="text-slate-500 text-center mt-2 text-base">
            Ingresa tus datos para continuar
          </Text>
        </View>

        <View className="space-y-4">
          <View className="space-y-2">
            <Text className="text-slate-600 font-medium ml-1">Email</Text>
            <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 h-14 focus:border-indigo-500">
              <Ionicons name="mail-outline" size={20} color="#64748b" />
              <TextInput
                placeholder="ejemplo@correo.com"
                className="flex-1 ml-3 text-slate-700 text-base"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="space-y-2 mt-4">
            <Text className="text-slate-600 font-medium ml-1">Contraseña</Text>
            <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 h-14 focus:border-indigo-500">
              <Ionicons name="lock-closed-outline" size={20} color="#64748b" />
              <TextInput
                placeholder="Tu contraseña secreta"
                className="flex-1 ml-3 text-slate-700 text-base"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#64748b"
                />
              </Pressable>
            </View>
          </View>

          <Pressable
            onPress={() => console.log("Recuperar contraseña")}
            className="items-end mt-2"
          >
            <Text className="text-indigo-600 font-semibold text-sm">
              ¿Olvidaste tu contraseña?
            </Text>
          </Pressable>

          <Pressable
            onPress={handleLogin}
            className="bg-indigo-600 h-14 rounded-2xl justify-center items-center shadow-lg shadow-indigo-200 active:bg-indigo-700 mt-6"
          >
            <Text className="text-white font-bold text-lg">Iniciar Sesión</Text>
          </Pressable>
        </View>

        <View className="flex-row justify-center mt-8">
          <Text className="text-slate-500">¿No tienes cuenta? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text className="text-indigo-600 font-bold">Regístrate</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
