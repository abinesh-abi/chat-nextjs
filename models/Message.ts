import { MessageType } from "@/types/chat";
import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;


type DbMessage = mongoose.Document & MessageType;

const MessageSchema = new Schema<DbMessage>(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Message ||
  mongoose.model<DbMessage>("Message", MessageSchema);
