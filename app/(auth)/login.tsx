import LoginSection from "@/sections/LoginSection/LoginSection";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useColorScheme } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const colorScheme = useColorScheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    />
  );
}
