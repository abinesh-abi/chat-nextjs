import Chat from "@/models/Chat";
import { ChatUserListType } from "@/types/chat";
import mongoose from "mongoose";

export async function getChatUsersList(userId: string) : Promise<ChatUserListType[]>{
  const userObjId = new mongoose.Types.ObjectId(userId);
  try {
    let users= await Chat.aggregate([
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
