import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import { useAuthStore } from "@/store/authStore";

export default function HomeScreen() {
  // Obtenemos la función de logout y la info del usuario (opcional, para saludar)
  const logout = useAuthStore((state) => state.logout);
  const userInfo = useAuthStore((state) => state.userInfo);
  const colorScheme = useColorScheme();

  const handleLogout = () => {
    logout();
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className={`text-2xl font-bold mb-2 ${ colorScheme === "dark" ? "text-white" : "text-black"}` } >
        Hola, {userInfo?.name || "Usuario"}
      </Text>
      <Text className="text-gray-500 mb-8">
        Has iniciado sesión correctamente
      </Text>

      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 px-8 py-3 rounded-xl active:bg-red-600"
      >
        <Text className="text-white font-bold text-lg">Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
