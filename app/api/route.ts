export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return Response.json({ ss: "sss" });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log({ id,a: request.body });

  return Response.json({ ss: "sss" });
}
