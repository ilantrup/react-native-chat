import { useAuthStore } from "@/store/authStore";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  // Función para manejar el Login
  const handleLogin = () => {
    //login("", "");
    router.push("/(login)/login");
  };

  // Función para manejar el Signup (Navegación o lógica)
  const handleSignup = () => {
    console.log("Navegar a registro");
  };

  return (
    <View className="flex-1 bg-slate-50">
      <StatusBar style="dark" />

      {/* Contenedor Principal */}
      <View className="flex-1 justify-center px-8">
        {/* Encabezado / Título */}
        <View className="mb-12 items-center">
          <Text className="text-4xl font-extrabold text-slate-800 mb-2">
            Bienvenido
          </Text>
          <Text className="text-slate-500 text-lg text-center">
            Tu app increíble empieza aquí.
          </Text>
        </View>

        {/* Botón de Login (Primario) */}
        <Pressable
          onPress={handleLogin}
          className="w-full bg-indigo-600 py-4 rounded-2xl items-center shadow-lg shadow-indigo-200 active:bg-indigo-700 mb-4"
        >
          <Text className="text-white font-bold text-lg">Iniciar Sesión</Text>
        </Pressable>

        {/* Botón de Signup (Secundario / Outline) */}
        <Pressable
          onPress={handleSignup}
          className="w-full bg-white border border-slate-200 py-4 rounded-2xl items-center shadow-sm active:bg-slate-50"
        >
          <Text className="text-slate-700 font-bold text-lg">Crear Cuenta</Text>
        </Pressable>
      </View>

      {/* Footer pequeño (Opcional) */}
      <View className="pb-8 items-center">
        <Text className="text-slate-400 text-sm">Versión 1.0.0</Text>
      </View>
    </View>
  );
}
