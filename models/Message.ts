import mongoose, { ObjectId } from "mongoose";
const Schema = mongoose.Schema;

export type Message = {
  _id: string;
  sender: ObjectId;
  chat: ObjectId;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type DbMessage = mongoose.Document & Message;

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
