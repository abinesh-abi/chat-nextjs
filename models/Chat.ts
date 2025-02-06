import mongoose from "mongoose";
const Schema = mongoose.Schema;

export type Chat = {
  _id: string;
  users: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
};

type DbChat = mongoose.Document & Chat;

const ChatSchema = new Schema<DbChat>(
  {
    description: {
      type: String,
      maxlength: [200, "Name cannot be more than 200 characters"],
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.models.Chat ||
  mongoose.model<DbChat>("Chat", ChatSchema);
