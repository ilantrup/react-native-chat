import { Chat } from "@/types/ChatType";
import { create } from "zustand";

type storeProps = {
  chats: Chat[],
  selectedChat: Chat | null,
  setSelectedChat: (chat: Chat | null) => void,
  setChats: (chats: Chat[]) => void,
};

export const useChatStore = create<storeProps>((set) => ({
  chats: [],
  selectedChat: null,
  setSelectedChat: (chat: Chat | null) => set({ selectedChat: chat }),
  setChats: (chats: Chat[]) => set({ chats }),
}))

