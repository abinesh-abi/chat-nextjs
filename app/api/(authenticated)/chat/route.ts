import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import Users, { User } from "@/models/Users";
import * as Yup from "yup";
import Chat from "@/models/Chat";
import { getUserByEmail } from "../../_services/userServices";
import { getChatUsersList } from "../../_services/chatServices";
// Define the type for the request parameters
interface Params {
  //   email: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const session = await getSession();
    const email = session?.user?.email;
    const user = await getUserByEmail(email);
    if (!user?._id) {
      return NextResponse.json({ msg: "User Not Found" }, { status: 404 });
    }
    const userLIst = await getChatUsersList(user?._id);

    return NextResponse.json(userLIst, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}

// validation for post body
const chatCreateSchema = Yup.object().shape({
  user1: Yup.string().required(),
  user2: Yup.string().required(),
});

export async function POST(request: Request, { params }: { params: Params }) {
  try {
    const session = await getSession();

    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const body = await request.json();
    const validatedData = await chatCreateSchema.validate(body, {
      abortEarly: false,
    });
    const { user1, user2 } = validatedData;

    // const created = session?.user?.email;
    let created = await Chat.create({ users: [user1, user2] });

    return NextResponse.json(created, { status: 200 });
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
}
