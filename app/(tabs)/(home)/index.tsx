import React, { useState, useEffect } from "react"; // <--- 1. Importar useState y useEffect
import {
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  View,
  Keyboard,
} from "react-native";
import ChatInput from "@/components/ChatInput";
import MessagesSection from "@/components/MessagesSection";
import { Messages } from "@/constants/Messages";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 49 : 56;

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideListener =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const keyboardShow = Keyboard.addListener(showListener, () => {
      setKeyboardVisible(true);
    });
    const keyboardHide = Keyboard.addListener(hideListener, () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={`flex-1 bg-${colorScheme === "dark" ? "black" : "white"}`}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View className="flex-1 px-2 py-2">
        <MessagesSection messages={Messages} />
      </View>

      <View
        className="p-2 border-t border-gray-200"
        style={{
          paddingBottom: isKeyboardVisible
            ? 10
            : insets.bottom + TAB_BAR_HEIGHT + 10,
        }}
      >
        <ChatInput />
      </View>
    </KeyboardAvoidingView>
  );
}
