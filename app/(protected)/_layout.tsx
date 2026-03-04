import "@/global.css";
import { useAuthStore } from "@/store/authStore";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import "react-native-reanimated";

export default function ProtectedLayout() {
  const { isLoggedIn, userInfo } = useAuthStore();
  const segments = useSegments() as string[];
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !userInfo) return;

    // Verificar en qué grupo de rutas estamos actualmente
    // segments suele ser algo como ["(protected)", "(patient)"]
    const inPatientGroup = segments.includes("(patient)");
    const inDoctorGroup = segments.includes("(doctor)");

    if (userInfo.role === "patient") {
      // SOLO redirigir si NO estamos ya en la ruta de paciente
      if (!inPatientGroup) {
        console.log("Soy paciente, redirigiendo a carpeta (patient)...");
        router.replace("/(protected)/(patient)");
      }
    } else if (userInfo.role === "doctor") {
      // SOLO redirigir si NO estamos ya en la ruta de doctor
      if (!inDoctorGroup) {
        console.log("Soy doctor, redirigiendo a carpeta (doctor)...");
        router.replace("/(protected)/(doctor)");
      }
    }
  }, [userInfo, segments, isMounted]);

  if (!isMounted) return <Slot />;

  return <Slot />;
}
