import React from "react";
import { KeyboardAvoidingView, Platform, useColorScheme, View } from "react-native";
import ChatInput from "@/components/ChatInput";
import MessagesSection from "@/components/MessagesSection";
import { Messages } from "@/constants/Messages";
import Colors from "@/constants/Colors";

export default function ChatScreen() {
    const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className={`flex-1 bg-${colorScheme === "dark" ? "black" : "white"}`}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View className="flex-1 px-4 py-2">
        <MessagesSection messages={Messages} />
      </View>

      <View className={`p-2 border-t border-gray-200 pb-4`}>
        <ChatInput />
      </View>
    </KeyboardAvoidingView>
  );
}
