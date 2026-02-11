import * as Location from "expo-location";

export async function requestLocationPermission() {
  // 1. Pedir permiso de Primer Plano (Foreground)
  let { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();

  if (foregroundStatus !== "granted") {
    return false;
  }

  // 2. Una vez que tenemos el Foreground, pedimos el Background (Siempre).
  let { status: backgroundStatus } =
    await Location.requestBackgroundPermissionsAsync();

  if (backgroundStatus === "granted") {
    return true;
  }

  return foregroundStatus === "granted";
}

export async function checkLocationPermission() {
  let { status } = await Location.getForegroundPermissionsAsync();
  return status === "granted";
}