import { NextResponse } from "next/server";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

export async function GET(req: Request) {
  try {
    const token = await getAccessToken();
    return NextResponse.json({ accessToken: token });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get access token" },
      { status: 500 }
    );
  }
}
