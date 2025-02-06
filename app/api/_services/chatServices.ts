import Chat from "@/models/Chat";
import Message from "@/models/Message";
import { ChatUserListType, MessageType } from "@/types/chat";
import mongoose from "mongoose";

export async function getChatUsersList(
  userId: string
): Promise<ChatUserListType[]> {
  const userObjId = new mongoose.Types.ObjectId(userId);
  try {
    let users = await Chat.aggregate([
      { $match: { users: userObjId } },
      {
        $project: {
          name: 1,
          user /*name*/: {
            $filter: {
              input: "$users",
              as: "user",
              cond: {
                $ne: ["$$user", userId],
              },
            },
          },
        },
      },
      { $unwind: "$user" },
      {
        $lookup: {
          from: "users",
          foreignField: "_id",
          localField: "user",
          as: "userDetails",
        },
      },
      { $unwind: "$userDetails" },
    ]);
    return users;
  } catch (error) {
    throw error;
  }
}

export async function createMessage(
  userId: string,
  chatId: string,
  content: string
): Promise<MessageType[]> {
  // const userObjId = new mongoose.Types.ObjectId(userId);
  // const chatObjId = new mongoose.Types.ObjectId(chatId);
  try {
    const message = await Message.create({
      sender: userId,
      chat: chatId,
      content,
    });
    return message;
  } catch (error) {
    throw error;
  }
}

export async function getMessage(
  chatId: string,
): Promise<MessageType[]> {
  // const userObjId = new mongoose.Types.ObjectId(userId);
  // const chatObjId = new mongoose.Types.ObjectId(chatId);
  try {
    const messages = await Message.find({
      chat: chatId,
    });
    return messages;
  } catch (error) {
    throw error;
  }
}

