import { Chat } from "@/types/ChatType";
import { useRouter } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Image, Pressable, Text, useColorScheme, View } from "react-native";

const StyledPressable = styled(Pressable);

export const ChatCard = ({ chat }: { chat: Chat }) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <StyledPressable
      onPress={() => router.push(`/(tabs)/(chat)/${chat.id}`)}
      className="border-b border-gray-100 dark:border-gray-800"
      style={({ pressed }) => ({
        backgroundColor: pressed
          ? isDark
            ? "#1f2937"
            : "#f3f4f6"
          : isDark
            ? "#000000"
            : "#ffffff",
      })}
    >
      <View className="flex-row items-center p-4 w-full">
        <Image
          source={{ uri: chat.avatarUrl }}
          className="w-12 h-12 rounded-full mr-4 bg-gray-300"
        />

        <View className="flex-1">
          <View className="flex-row justify-between items-center mb-1">
            <Text
              numberOfLines={1}
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {chat.contactName}
            </Text>
            <Text
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {chat.timestamp}
            </Text>
          </View>

          <Text
            numberOfLines={1}
            className={`${isDark ? "text-gray-300" : "text-gray-500"}`}
          >
            {chat.lastMessage}
          </Text>
        </View>
      </View>
    </StyledPressable>
  );
};

export default ChatCard;