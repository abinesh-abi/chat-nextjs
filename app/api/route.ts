import UserSchema from "@/models/Users";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  UserSchema.create({ name: "test", password: "ssss" })
    .then((value) => console.log(value, "user created"))
    .catch((err) => console.log(err, "errrrrrr"));

  return Response.json({ ss: "sss" });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log({ id, a: request.body });

  return Response.json({ ss: "sss" });
}
