export interface Chat {
  id: string;
  contactName: string;
  avatarUrl: string;
  timestamp?: string;
  unreadCount?: number;
  lastMessage?: string;
}
