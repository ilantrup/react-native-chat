import { useAuthStore } from "@/store/authStore";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, useColorScheme, View } from "react-native";

export default function Settings() {
  const logout = useAuthStore((state) => state.logout);
  const userInfo = useAuthStore((state) => state.userInfo);
  const colorScheme = useColorScheme();
  return (
    <View
      className={`${colorScheme === "dark" ? "bg-black" : "bg-gray-50"} flex-1 pt-8 px-4`}
    >
      <View
        className={`${colorScheme === "dark" ? "bg-slate-800" : "bg-white"} rounded-2xl overflow-hidden shadow-sm`}
      >
        {/* ITEM 1: Username */}
        <View className="flex-row items-center p-4 border-b border-gray-100">
          <View className="bg-blue-100 p-2 rounded-full mr-4">
            <Ionicons name="person" size={20} color="#3b82f6" />
          </View>
          <View>
            <Text className="text-gray-500 text-xs uppercase font-bold">
              Nombre de usuario
            </Text>
            <Text
              className={`${colorScheme === "dark" ? "text-gray-200" : "text-gray-800"} text-lg font-medium`}
            >
              {userInfo?.fullName || "Sin nombre"}
            </Text>
          </View>
        </View>

        {/* ITEM 2: Email */}
        <View className="flex-row items-center p-4 border-b border-gray-100">
          <View className="bg-green-100 p-2 rounded-full mr-4">
            <Ionicons name="mail" size={20} color="#10b981" />
          </View>
          <View>
            <Text className="text-gray-500 text-xs uppercase font-bold">
              Correo Electrónico
            </Text>
            <Text
              className={`${colorScheme === "dark" ? "text-gray-200" : "text-gray-800"} text-lg font-medium`}
            >
              {userInfo?.email || "Sin email"}
            </Text>
          </View>
        </View>

        {/* ITEM 3: Logout (Botón integrado en la lista) */}
        <Pressable
          onPress={logout}
          className="flex-row items-center p-4 active:bg-gray-50"
        >
          <View className="bg-red-100 p-2 rounded-full mr-4">
            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
          </View>
          <View className="flex-1">
            <Text className="text-red-500 text-lg font-bold">
              Cerrar Sesión
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
