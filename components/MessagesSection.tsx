import { FlatList } from "react-native";
import MessageBubble from "./MessageBubble";
import { Messages } from "@/constants/Messages";

export default function MessagesSection({ messages }: { messages: string[] }) {
  return (
    <FlatList className="flex-1" data={messages} renderItem={({ item, index }) => (
      <MessageBubble message={item} isSender={index % 2 === 0} />
    )} />
  )
}