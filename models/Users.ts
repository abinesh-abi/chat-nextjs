import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface Users extends mongoose.Document {
  name: string;
  password: string;
}

const UserSchema = new Schema<Users>(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    password: {
      type: String,
      required: [true, "Please provide Password"],
      // maxlength: [60, "Name cannot be more than 60 characters"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<Users>("User", UserSchema);
