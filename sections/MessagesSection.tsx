import { FlatList, LayoutChangeEvent } from "react-native";
import MessageBubble from "../components/MessageBubble";
import { useState } from "react";

export default function MessagesSection({ messages }: { messages: string[] }) {
  const [listHeight, setListHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const scrollEnabled = contentHeight > listHeight;
  return (
    <FlatList
      className="flex-1"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={messages}
      scrollEnabled={scrollEnabled}
      renderItem={({ item, index }) => (
        <MessageBubble message={item} isSender={index % 2 === 0} />
      )}
      onLayout={(event: LayoutChangeEvent) => {
        setListHeight(event.nativeEvent.layout.height);
      }}
      onContentSizeChange={(w, h) => {
        setContentHeight(h);
      }}
    />
  );
}
