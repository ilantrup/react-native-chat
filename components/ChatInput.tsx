import { Pressable, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SendIcon } from "./Icons";

export default function ChatInput() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-row items-center gap-3">
      <View className="flex-1">
        <TextInput
          placeholder="Ingresar mensaje..."
          className="rounded-xl p-4 bg-gray-100 border border-gray-200"
        />
      </View>

      <View>
        <Pressable className="rounded-xl p-4 bg-blue-500">
          <SendIcon color="white" />
        </Pressable>
      </View>
    </View>
  );
}
