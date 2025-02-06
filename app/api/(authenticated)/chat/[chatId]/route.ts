import { getMessage } from "@/app/api/_services/chatServices";
import { getUserByEmail } from "@/app/api/_services/userServices";
import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const session = await getSession();
    const email = session?.user?.email;
    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const user = await getUserByEmail(email);
    if (!user?._id) {
      return NextResponse.json({ msg: "User Not Found" }, { status: 404 });
    }
    const messages = await getMessage( params.chatId);

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
