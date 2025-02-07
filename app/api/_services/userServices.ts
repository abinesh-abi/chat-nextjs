import Users, { User } from "@/models/Users";
import mongoose from "mongoose";

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    let user = await Users.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

export async function getUsersWithoutChat(userId: string) {
  try {
    const users = await Users.aggregate([
      { $match: { _id: { $ne: userId } } },
      {
        $lookup: {
          from: "chats",
          localField: "_id",
          foreignField: "users",
          as: "chat",
        },
      },
      // {
      //   $match: {
      //     chat: { $eq: [] }, // Match users with no chats
      //   },
      // },
      {
        $match: {
          chat: {
            $not: {
              $elemMatch: { users: new mongoose.Types.ObjectId(userId) },
            },
          }, // Exclude users who have chats with the current user
        },
      },
      {
        $project: {
          chat: 0,
        },
      },
    ]);
    // let users = await Users.find({ _id: { $ne: userId } });
    return users;
  } catch (error) {
    throw error;
  }
}
