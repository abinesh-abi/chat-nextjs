import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import User from "@/models/Users";
// Define the type for the request parameters
interface Params {
  //   email: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const session = await getSession();
    const email = session?.user?.email;
    let usersList = await User.find({ email:{$ne:email} });

    return NextResponse.json(usersList, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
