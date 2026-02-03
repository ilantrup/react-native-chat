import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MOCK_CHATS } from "@/constants/Chats";
import AllChatsSection from "@/sections/AllChatsSection";
import { useChatStore } from "@/store/chatStore";

export default function AllChatsScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 49 : 56;
  const setChats = useChatStore((state) => state.setChats);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    setChats(MOCK_CHATS);
  }, []);

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
      <View
        className=" flex-1 px-2 py-2 border-t border-gray-200"
        style={{
          paddingBottom: isKeyboardVisible
            ? 10
            : insets.bottom + TAB_BAR_HEIGHT + 10,
        }} 
      >
        <AllChatsSection />
      </View>
    </KeyboardAvoidingView>
  );
}
