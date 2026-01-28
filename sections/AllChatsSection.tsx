import { useState } from "react";
import { FlatList, LayoutChangeEvent } from "react-native";
import ChatCard from "@/components/ChatCard";
import { Chat } from "@/types/ChatType";
import Separator from "@/components/Separator";
import { useChatStore } from "@/store/chatStore";

export default function AllChatsSection() {
  const [listHeight, setListHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollEnabled = contentHeight > listHeight;

  const chats = useChatStore((state) => state.chats);

  return (
    <FlatList
      className="flex-1"
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      data={chats}
      renderItem={({ item }) => <ChatCard chat={item} />}
      scrollEnabled={scrollEnabled}
      ItemSeparatorComponent={Separator}
      onLayout={(event: LayoutChangeEvent) => {
        setListHeight(event.nativeEvent.layout.height);
      }}
      onContentSizeChange={(w, h) => {
        setContentHeight(h);
      }}
    />
  );
}
