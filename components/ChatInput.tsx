import { Pressable, TextInput, View } from "react-native";
import { SendIcon } from "./Icons";
import { useColorScheme } from "react-native";
import { styled } from "nativewind";

export default function ChatInput() {
  const colorScheme = useColorScheme();
  const StyledPressable = styled(Pressable);
  return (
    <View className="flex-row items-center gap-3 px-4">
      <View className="flex-1">
        <TextInput
          placeholder="Ingresar mensaje..."
          className={`rounded-xl p-4 ${
            colorScheme === "dark" ? "bg-gray-800" : "bg-gray-100"
          } border border-gray-200`}
        />
      </View>

      <View>
        <StyledPressable
          className={`rounded-xl p-4 ${
            colorScheme === "dark" ? "bg-blue-500" : "bg-blue-500"
          }`}
        >
          <SendIcon color="white" />
        </StyledPressable>
      </View>
    </View>
  );
}
