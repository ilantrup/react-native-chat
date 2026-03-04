import { Stack } from "expo-router";

export default function LocationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Ubicación",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Ubicación" }} />
    </Stack>
  );
}
