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
    if (email) {
      const user = await User.findOne({ email });
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
      return NextResponse.json(user, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
  //   const { email } = params;

  return NextResponse.json({ hi: "hello" });

  //   try {
  //     const user = await User.findOne({ email });
  //     if (!user) {
  //       return NextResponse.json({ message: 'User not found' }, { status: 404 });
  //     }
  //     return NextResponse.json(user, { status: 200 });
  //   } catch (error) {
  //     return NextResponse.json({ message: 'Server error', error }, { status: 500 });
  //   }
}
