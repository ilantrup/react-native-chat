import ChatInput from "@/components/ChatInput";
import ChatHeader from "@/components/ChatHeader";
import { Messages } from "@/constants/Messages";
import MessagesSection from "@/sections/MessagesSection";
import { useChatStore } from "@/store/chatStore";
import { useLocalSearchParams, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatScreen() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 49 : 56;
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const { chat_id } = useLocalSearchParams();

  const chats = useChatStore((state) => state.chats);
  const setSelectedChat = useChatStore((state) => state.setSelectedChat);

  useEffect(() => {
    const selectedChat = chats.find((chat) => chat.id === chat_id);
    setSelectedChat(selectedChat ? selectedChat : null);
  }, [chat_id]);

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
      <Stack.Screen
        options={{
          headerTitle: () => <ChatHeader />,
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTintColor: colorScheme === "dark" ? "white" : "black",
        }}
      />

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
