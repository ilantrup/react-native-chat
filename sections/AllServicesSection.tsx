import React from "react";
import { Text, useColorScheme, View } from "react-native";
import { EmergencyButton } from "@/components/EmergencyButton";

const AllServicesSection = () => {
  const colorScheme = useColorScheme();
  const handleEmergencyPress = () => {
    console.log("¡Solicitando asistencia!");
  };


  return (
    <View className="pt-30 justify-center gap-8">
      <EmergencyButton onPress={handleEmergencyPress} />
      <Text className={`text-gray-500 text-center px-10 ${colorScheme === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>
        Toca el botón solo en caso de emergencia real.
      </Text>
    </View>
  );
};

export default AllServicesSection;
