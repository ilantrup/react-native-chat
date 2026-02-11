import { Alert, Linking } from "react-native";

export const showLocationSettingsAlert = () => {
  Alert.alert(
    "Permisos de Ubicación Desactivados",
    "Para ver el mapa necesitamos acceso a tu ubicación. Por favor, actívalo en los ajustes.",
    [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Abrir Ajustes",
        onPress: () => Linking.openSettings(),
      },
    ],
  );
};
