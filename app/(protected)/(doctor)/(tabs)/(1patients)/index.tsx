import { useLocation } from "@/hooks/LocationHook";
import { Ionicons } from "@expo/vector-icons";
import { styled } from "nativewind";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import MapView, { LatLng } from "react-native-maps";

const StyledMapView = styled(MapView);
const StyledPressable = styled(Pressable);

export default function Patients() {
  const colorScheme = useColorScheme();
  const mapRef = useRef<MapView>(null);
  const [origin, setOrigin] = useState<LatLng>({
    latitude: -34.605914,
    longitude: -58.420097,
  });

  const { location, errorMsg, isLoading, retryLocation } = useLocation();

  const centerOnUser = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        },
        1000,
      );
    }
  };
  useEffect(() => {
    if (location) {
      centerOnUser();
    }
  }, [location]);

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
              onPress={centerOnUser}
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
