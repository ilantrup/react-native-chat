import { useAuthStore } from "@/store/authStore";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Login() {
  const router = useRouter();

  const colorScheme = useColorScheme();

  const handleLogin = () => {
    router.push("/(auth)/login");
  };

  const handleSignup = () => {
    console.log("Navegar a registro");
  };

  return (
    <View className={`flex-1 ${colorScheme === "dark" ? "bg-black" : "bg-slate-50"}`}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      <View className="flex-1 justify-center px-8">
        <View className="mb-12 items-center">
          <Text className={`text-4xl font-extrabold mb-2 ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>
            Bienvenido
          </Text>
          <Text className={`text-lg text-center ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>
            Tu salud empieza aquí
          </Text>
        </View>

        {/* Botón de Login (Primario) */}
        <Pressable
          onPress={handleLogin}
          className={`w-full py-4 rounded-2xl items-center  active:bg-indigo-700 mb-4 ${colorScheme === "dark" ? "bg-indigo-600" : "bg-indigo-600"}`}
        >
          <Text className="text-white font-bold text-lg">Iniciar sesión</Text>
        </Pressable>

        {/* Botón de Signup (Secundario / Outline) */}
        <Pressable
          onPress={handleSignup}
          className={`w-full py-4 rounded-2xl items-center shadow-sm active:bg-slate-50 ${colorScheme === "dark" ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
        >
          <Text className={`font-bold text-lg ${colorScheme === "dark" ? "text-slate-100" : "text-slate-800"}`}>Crear cuenta</Text>
        </Pressable>
      </View>

      {/* Footer pequeño (Opcional) */}
      <View className="pb-8 items-center">
        <Text className="text-slate-400 text-sm">Versión 1.0.0</Text>
      </View>
    </View>
  );
}
