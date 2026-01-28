import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Chats",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Todos los chats" }} />
      <Stack.Screen name="[chat_id]" options={{ title: "Chat" }} />
    </Stack>
  );
}
