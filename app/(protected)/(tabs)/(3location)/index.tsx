import { useLocation } from "@/hooks/LocationHook";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";

const messiImage = require("@/assets/images/messi.png");
const StyledMapView = styled(MapView);
const StyledPressable = styled(Pressable);

export default function ChatLocation() {
  const colorScheme = useColorScheme();
  const mapRef = useRef<MapView>(null);
  const [origin, setOrigin] = useState<LatLng>({
    latitude: -34.605914,
    longitude: -58.420097,
  });
  const [destination, setDestination] = useState<LatLng>({
    latitude: -34.540685,
    longitude: -58.461781,
  });

  const { location, errorMsg, isLoading, retryLocation } = useLocation();

  const centerOnUserAndDestination = () => {
    if (location && destination && mapRef.current) {
      mapRef.current.fitToCoordinates(
        [
          // Punto 1: Tu ubicación actual
          { latitude: location.latitude, longitude: location.longitude },
          // Punto 2: El destino (del useState)
          destination,
        ],
        {
          edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
          animated: true,
        },
      );
    }
  };
  //Si se mueve el location o el destination, centramos el mapa
  useEffect(() => {
    if (location && destination) {
      centerOnUserAndDestination();
    }
  }, [location, destination]);

  if (isLoading && !location) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator
          size="large"
          color={colorScheme === "dark" ? "white" : "black"}
        />
        <Text>Buscando GPS...</Text>
      </View>
    );
  }
  if (errorMsg) {
    return (
      <View className="flex-1 justify-center items-center px-10">
        <Text className="text-red-500 mb-4 text-center">{errorMsg}</Text>
        <Pressable
          className="bg-blue-500 p-2 rounded-md"
          onPress={retryLocation}
        >
          <Text className="text-white">Intentar de nuevo</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View className="flex-1 relative">
      <StyledMapView
        ref={mapRef}
        className="w-full h-full"
        initialRegion={{
          latitude: location?.latitude ?? origin.latitude,
          longitude: location?.longitude ?? origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        showsCompass={true}
        showsScale={true}
      >
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(e) => setDestination(e.nativeEvent.coordinate)}
        >
          <Image
            source={messiImage}
            className="w-24 h-24 rounded-full"
            resizeMode="cover"
          />
        </Marker>

        {/*<MapViewDirections
          origin={origin}
          destination={destination}
          apikey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
          strokeColor="#000000"
          strokeWidth={6}
        />*/}
      </StyledMapView>
      {location && (
        <View
          pointerEvents="box-none"
          className="absolute inset-0 items-end justify-start pt-20 pr-4"
        >
          <View
            style={[
              styles.arrowButton,
              {
                backgroundColor: colorScheme === "dark" ? "#374151" : "#F3F4F6",
              },
            ]}
          >
            <StyledPressable
              onPress={centerOnUserAndDestination}
              className="w-full h-full items-center justify-center active:opacity-70"
            >
              <Ionicons name="navigate-outline" size={24} color="#007AFF" />
            </StyledPressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  arrowButton: {
    width: 45,
    height: 45,
    borderRadius: 24,
    paddingTop: 4,
    paddingRight: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
