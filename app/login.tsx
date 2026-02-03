import { useAuthStore } from "@/store/authStore";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const login = useAuthStore((state) => state.login);

  const router = useRouter();

  function handleLogin() {
    login("", "");
    router.replace("/");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Pressable
        onPress={handleLogin}
        style={{ marginTop: 20, padding: 10, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </Pressable>
    </View>
  );
}
