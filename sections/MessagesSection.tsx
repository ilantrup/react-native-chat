import { FlatList } from "react-native";
import MessageBubble from "../components/MessageBubble";

export default function MessagesSection({ messages }: { messages: string[] }) {
  return (
    <FlatList
      className="flex-1"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={messages}
      renderItem={({ item, index }) => (
        <MessageBubble message={item} isSender={index % 2 === 0} />
      )}
    />
  );
}
