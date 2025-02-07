import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import User from "@/models/Users";
import { getUserByEmail, getUsersWithoutChat } from "@/app/api/_services/userServices";
// Define the type for the request parameters
interface Params {
  //   email: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const session = await getSession();
    if (!session)
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    const email = session?.user?.email;
    const user = await getUserByEmail(email);
    if (!user?._id) {
      return NextResponse.json({ msg: "User Not Found" }, { status: 404 });
    }
    // let usersList = await User.find({ email: { $ne: email } });
    let usersList = await getUsersWithoutChat(user._id)

    return NextResponse.json(usersList, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
