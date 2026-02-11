import { showLocationSettingsAlert } from "@/utils/AlertUtils";
import { checkLocationPermission, requestLocationPermission } from "@/utils/PermissionUtils";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const locationSubscription = useRef<Location.LocationSubscription | null>(null);

  const startWatching = async (): Promise<void> => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const hasPermission: boolean = await checkLocationPermission();

      let granted: boolean = hasPermission;

      if (!hasPermission) {
        granted = await requestLocationPermission();
      }

      if (!granted) {
        setErrorMsg("Permiso de ubicación denegado.");
        setIsLoading(false);
        return;
      }

      // Iniciamos el rastreo en tiempo real
      locationSubscription.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High, // Alta precisión
          timeInterval: 1000, // Actualizar cada 1 segundo (mínimo)
          distanceInterval: 50, // Actualizar cada 50 metros
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          setIsLoading(false);
        },
      );
    } catch (err) {
      setErrorMsg("Error al obtener la ubicación");
      setIsLoading(false);
    }
  };

  // Al montar el componente, iniciamos el rastreo
  useEffect(() => {
    startWatching();

    // Cleanup: Al desmontar, dejamos de escuchar el GPS para ahorrar batería
    return () => {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, []);

  // Función para reintentar manualmente (útil para un botón de "Reintentar")
  const retryLocation = () => {
    checkLocationPermission().then((hasPermission) => {
      if (!hasPermission) {
        showLocationSettingsAlert();
      } else {
        startWatching();
      }
    });
  };

  return {
    location, // { latitude, longitude, ... }
    errorMsg, // string | null
    isLoading, // boolean
    retryLocation, // función
  };
}
