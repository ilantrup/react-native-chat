import { Stack } from "expo-router";

export default function LocationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Ajustes",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Ajustes" }} />
    </Stack>
  );
}
