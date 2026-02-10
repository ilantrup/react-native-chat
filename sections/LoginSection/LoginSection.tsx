import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ColorSchemeName,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type Props = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  colorScheme: ColorSchemeName;
};

const LoginSection = (props: Props) => {
  const { email, password, setEmail, setPassword, handleLogin, colorScheme } =
    props;
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className={`flex-1 ${colorScheme === "dark" ? "bg-slate-950" : "bg-slate-50"}`}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

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
            <Text className={`text-3xl font-bold ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"} text-center`}>
              ¡Hola de nuevo!
            </Text>
            <Text className={`text-slate-500 text-center mt-2 text-base ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>
              Ingresa tus datos para continuar
            </Text>
          </View>

          <View className="space-y-4">
            <View className="space-y-2">
              <Text className={`text-slate-600 font-medium ml-1 ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>Email</Text>
              <View className={`flex-row items-center border rounded-2xl px-4 h-14 focus:border-indigo-500 ${colorScheme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                <Ionicons name="mail-outline" size={20} color="#64748b" />
                <TextInput
                  placeholder="ejemplo@correo.com"
                  className={`flex-1 ml-3 text-base ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View className="space-y-2 mt-4">
              <Text className={`text-slate-600 font-medium ml-1 ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>
                Contraseña
              </Text>
              <View className={`flex-row items-center border rounded-2xl px-4 h-14 focus:border-indigo-500 ${colorScheme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#64748b"
                />
                <TextInput
                  placeholder="Tu contraseña"
                  className={`flex-1 ml-3 text-base ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  onSubmitEditing={handleLogin}
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
              <Text className={`text-indigo-600 font-semibold text-sm ${colorScheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}>
                ¿Olvidaste tu contraseña?
              </Text>
            </Pressable>

            <Pressable
              onPress={handleLogin}
              className="bg-indigo-600 h-14 rounded-2xl justify-center items-center shadow-lg  active:bg-indigo-700 mt-6"
            >
              <Text className={`font-bold text-lg ${colorScheme === "dark" ? "text-slate-100" : "text-white"}`}>
                Iniciar Sesión
              </Text>
            </Pressable>
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className={`text-slate-500 ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>¿No tienes cuenta? </Text>
            <Pressable onPress={() => router.push("/signup")}>
              <Text className={`text-indigo-600 font-bold ${colorScheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}>Regístrate</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginSection;
