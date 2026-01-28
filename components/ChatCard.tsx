import { Chat } from "@/types/ChatType";
import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";

const ChatCard = ({ chat }: { chat: Chat }) => {
  const colorScheme = useColorScheme();
  const StyledPressable = styled(Pressable);
  return (
    <Link href={`/(tabs)/(chat)/${chat.id}`} asChild>
      <StyledPressable
        onPress={() => {}}
        className={`border-b active:bg-gray-100 dark:active:bg-gray-800`}
      >
        <View className="flex-row items-center p-4">
          <Image
            source={{ uri: chat.avatarUrl }}
            className="w-12 h-12 rounded-full mr-4 bg-gray-300"
          />
          <View className="flex-1">
            <View className="flex-row justify-between items-center mb-1">
              <Text
                numberOfLines={1}
                className={`text-lg font-semibold ${
                  colorScheme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {chat.contactName}
              </Text>
              <Text
                className={`text-xs ${
                  colorScheme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {chat.timestamp}
              </Text>
            </View>

            <Text
              numberOfLines={1}
              className={`${
                colorScheme === "dark" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {chat.lastMessage}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
};

export default ChatCard;
