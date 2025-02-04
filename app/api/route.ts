import UserSchema from "@/models/Users";
import { getSession } from "@auth0/nextjs-auth0";

export async function GET(request: Request) {
  const session = getSession()
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id");

  // UserSchema.create({ name: "test", password: "ssss" })
  //   .then((value) => console.log(value, "user created"))
  //   .catch((err) => console.log(err, "errrrrrr"));

  return Response.json({ ss: "sss" });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log({ id, a: request.body });

  return Response.json({ ss: "sss" });
}
