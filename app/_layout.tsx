import "@/global.css";
import { useAuthStore } from "@/store/authStore";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isLoggedIn } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!loaded) return;

    const inAuthGroup = segments[0] === "(protected)";
    if (!isLoggedIn && inAuthGroup) {
      router.replace("/(auth)");
    } else if (isLoggedIn && segments[0] === "(auth)") {
      router.replace("/(protected)");
    }
  }, [isLoggedIn, segments, loaded]);

  if (!loaded) {
    return null;
  }



  const inAuthGroup = segments[0] === "(protected)";

  if (!isLoggedIn && inAuthGroup) {
    return <View />;
  }

  return  <Slot />;
}
