import LoginSection from "@/sections/LoginSection/LoginSection";
import { useAuthStore } from "@/store/authStore";
import { getUserInfo } from "@/utils/GoogleUtils";
import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const googleLogin = useAuthStore((state) => state.googleLogin);
  const userInfo = useAuthStore((state) => state.userInfo);
  console.log("La info del user es: ", userInfo);
  const colorScheme = useColorScheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS,
    androidClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_ANDROID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      googleLogin(response.authentication?.accessToken);
    }
  }, [response]);

  const handleLogin = () => {
    console.log("Logueando con:", email, password);
    login(email, password);
    router.replace("/");
  };


  return (
    <LoginSection
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
      colorScheme={colorScheme}
      request={request}
      response={response}
      promptAsync={promptAsync}
    />
  );
}
