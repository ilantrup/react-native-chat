import { Text, View } from "react-native";

export default function MessageBubble({
    message,
    isSender,
}: {
    message: string;
    isSender: boolean;
}) {
    return (
      <View
        className={`p-4 rounded-xl ${
          isSender ? "self-end bg-cyan-500 mr-2" : "self-start bg-gray-200 ml-2"
        }`}
      >
        <Text>{message}</Text>
      </View>
    );
}