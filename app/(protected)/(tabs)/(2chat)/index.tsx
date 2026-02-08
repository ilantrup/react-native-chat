import { MOCK_CHATS } from "@/constants/Chats";
import AllChatsSection from "@/sections/AllChatsSection";
import { useChatStore } from "@/store/chatStore";
import React, { useEffect, useState } from "react";
import { Keyboard, Platform, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AllChatsScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
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
    <View className=" flex-1">
      <AllChatsSection />
    </View>
  );
}
