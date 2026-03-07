import { AuthDivider } from "@/components/LoginComponents/AuthDivider";
import { AuthHeader } from "@/components/LoginComponents/AuthHeader";
import { CustomInput } from "@/components/LoginComponents/CustomInput";
import { SocialButton } from "@/components/LoginComponents/SocialButton";
import {
  AuthRequest,
  AuthRequestPromptOptions,
  AuthSessionResult,
} from "expo-auth-session";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  ColorSchemeName,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

WebBrowser.maybeCompleteAuthSession();

type Props = {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
  colorScheme: ColorSchemeName;
  request: AuthRequest | null;
  response: AuthSessionResult | null;
  promptAsync: (
    options?: AuthRequestPromptOptions,
  ) => Promise<AuthSessionResult>;
};

const LoginSection = (props: Props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    colorScheme,
    promptAsync,
  } = props;
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        className={`flex-1 ${colorScheme === "dark" ? "bg-black" : "bg-slate-50"}`}
      >
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
            headerBackButtonDisplayMode: "minimal",
          }}
        />

        <View
          className="flex-1 justify-center px-6"
        >
          <AuthHeader colorScheme={colorScheme} />

          <View className="space-y-4">
            <CustomInput
              label="Correo electrónico"
              iconName="mail-outline"
              colorScheme={colorScheme}
              placeholder="ejemplo@correo.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textContentType="emailAddress"
            />

            <CustomInput
              label="Contraseña"
              iconName="lock-closed-outline"
              colorScheme={colorScheme}
              placeholder="Tu contraseña"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              onSubmitEditing={handleLogin}
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
              clearTextOnFocus={false}
              keyboardType="default"
            />

            <Pressable
              onPress={() => console.log("Recuperar contraseña")}
              className="items-end mt-2"
            >
              <Text
                className={`text-indigo-600 font-semibold text-sm ${colorScheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
              >
                ¿Olvidaste tu contraseña?
              </Text>
            </Pressable>

            <Pressable
              onPress={handleLogin}
              className="bg-indigo-600 h-14 rounded-2xl justify-center items-center shadow-lg active:bg-indigo-700 mt-6"
            >
              <Text
                className={`font-bold text-lg ${colorScheme === "dark" ? "text-slate-100" : "text-white"}`}
              >
                Iniciar Sesión
              </Text>
            </Pressable>
          </View>

          <AuthDivider colorScheme={colorScheme} />

          <SocialButton
            provider="Google"
            iconName="logo-google"
            colorScheme={colorScheme}
            onPress={() => promptAsync()}
          />

          <View className="flex-row justify-center mt-8">
            <Text
              className={`text-slate-500 ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}
            >
              ¿No tienes cuenta?{" "}
            </Text>
            <Pressable onPress={() => router.push("/signup")}>
              <Text
                className={`text-indigo-600 font-bold ${colorScheme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
              >
                Regístrate
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginSection;
