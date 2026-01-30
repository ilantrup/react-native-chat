import { SymbolView } from "expo-symbols";
import { styled } from "nativewind";
import React from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface EmergencyButtonProps {
  onPress?: () => void;
}
const StyledPressable = styled(Pressable);

export const EmergencyButton = ({ onPress }: EmergencyButtonProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.5);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <StyledPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      className="flex flex-col items-center"
    >
      <Animated.View style={[animatedStyle]}>
        <SymbolView
          name="lifepreserver.fill"
          size={400}
          tintColor="red"
          fallback={true}
        />
      </Animated.View>
      <Text className="text-3xl font-bold text-center text-red-600 dark:text-red-400">
        Solicitar asistencia ya!
      </Text>
    </StyledPressable>
  );
};
