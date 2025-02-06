import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import * as Yup from "yup";
import { getUserByEmail } from "../../../_services/userServices";
import { createMessage } from "../../../_services/chatServices";
interface Params {
  //   email: string;
}

const messageCreateSchema = Yup.object().shape({
  chatId: Yup.string().required(),
  content: Yup.string().required(),
});

export async function POST(request: Request, { params }: { params: Params }) {
  try {
    const session = await getSession();
    const email = session?.user?.email;

    if (!session)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    const user = await getUserByEmail(email);
    if (!user?._id) {
      return NextResponse.json({ msg: "User Not Found" }, { status: 404 });
    }

    const body = await request.json();
    const validatedData = await messageCreateSchema.validate(body, {
      abortEarly: false,
    });
    const { chatId, content } = validatedData;

    let newMessage = await createMessage(user?._id, chatId, content);

    return NextResponse.json(newMessage, { status: 200 });
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
