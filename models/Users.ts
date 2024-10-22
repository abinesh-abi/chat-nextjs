import mongoose from "mongoose";
const Schema = mongoose.Schema;

export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

type DbUsers = mongoose.Document & User;

const UserSchema = new Schema<DbUsers>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide a name."],
      // maxlength: [60, "Name cannot be more than 60 characters"],
    },
    password: {
      type: String,
      // required: [true, "Please provide Password"],
      // maxlength: [60, "Name cannot be more than 60 characters"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<DbUsers>("User", UserSchema);
