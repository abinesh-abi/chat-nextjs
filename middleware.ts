// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest,response:NextResponse) {
  const token = request.cookies.get("appSession");
  const { pathname } = request.nextUrl;


  const authenticatedPaths = ["/api/user", "/api/chat"];
  if (authenticatedPaths.some((path) => pathname.startsWith(path))) {
    if (!token)
      return NextResponse.json({ msg: "unauthorized" }, { status: 401 });
    // if (token?.value) {
    //   let email: null | string;
    //   console.log(process.env.AUTH0_SECRET)
    //   try {
    //     if(process.env.AUTH0_SECRET){
    //     const decoded = jwt.verify(token.value, process.env.AUTH0_SECRET); // Use your JWT secret
    //     console.log(decoded,process.env.AUTH0_SECRET,'hiiiiiiiii')
    //     // email = decoded.email; // Adjust based on your token structure
    //     }
    //   } catch (error) {
    //     console.error("Token verification failed:", error);
    //     // return NextResponse.json();
    //   }
    // }
  }

  // Continue to the requested page
  return NextResponse.next();
}

// // Optional: Define which paths the middleware should run on
// export const config = {
//   matcher: ["/protected/:path*", "/another-path/:path*"], // Apply middleware to specific paths
// };
