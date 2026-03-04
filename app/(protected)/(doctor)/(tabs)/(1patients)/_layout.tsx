import { Stack } from "expo-router";

export default function PatientLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Pacientes",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pacientes" }} />
    </Stack>
  );
}
