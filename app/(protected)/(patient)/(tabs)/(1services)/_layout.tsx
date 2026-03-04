import { Stack } from "expo-router";

export default function ServiceLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Servicios",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Asistencia" }} />
    </Stack>
  );
}
