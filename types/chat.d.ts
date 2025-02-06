import { User } from "@/models/Users";

export type ChatUserListType = {
  _id: string;
  user: string;
  userDetails: User;
};
