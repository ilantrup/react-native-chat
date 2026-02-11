import { useLocation } from "@/hooks/LocationHook";
import { styled } from "nativewind";
import React, { useState } from "react";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";
const messiImage = require("@/assets/images/messi.png");
const StyledMapView = styled(MapView);
import MapViewDirections from "react-native-maps-directions";

export default function ChatLocation() {
  const [origin, setOrigin] = useState<LatLng>({
    latitude: -34.605914,
    longitude: -58.420097,
  });
  const [destination, setDestination] = useState<LatLng>({
    latitude: -34.540685,
    longitude: -58.461781,
  });

  const { location, errorMsg, isLoading, retryLocation } = useLocation();
  if (isLoading && !location) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
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
    <View className="flex-1">
      <StyledMapView
        className="w-full h-full"
        initialRegion={{
          latitude: location?.latitude ?? origin.latitude,
          longitude: location?.longitude ?? origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
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
    </View>
  );
}
