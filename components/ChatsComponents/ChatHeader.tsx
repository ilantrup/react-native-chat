import React from "react";
import { View, Text, Image, useColorScheme } from "react-native";
import { useChatStore } from "@/store/chatStore";

export default function ChatHeader() {
  const selectedChat = useChatStore((state) => state.selectedChat);
  const colorScheme = useColorScheme();

  if (!selectedChat) return null;

  return (
    <View className="flex-row items-center justify-center pb-2">
      <Image
        source={{ uri: selectedChat.avatarUrl }}
        className="w-9 h-9 rounded-full mr-3 bg-gray-300"
      />
      <Text
        className={`text-lg font-semibold ${
          colorScheme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {selectedChat.contactName}
      </Text>
    </View>
  );
}
