
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);

  const out = { a: request.url,name:'aaa'};

  return Response.json(out);
}
