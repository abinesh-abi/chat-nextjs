import { User } from "@/models/Users";

export type ChatUserListType = {
  _id: string;
  user: string;
  userDetails: User;
};
export type MessageType = {
  _id: string;
  sender: ObjectId;
  chat: ObjectId;
  content: string;
  createdAt: string;
  updatedAt: string;
};
