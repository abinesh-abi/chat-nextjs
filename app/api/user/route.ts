// app/api/users/[email]/route.ts
import { NextResponse } from 'next/server';

// Define the type for the request parameters
interface Params {
  email: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
//   const { email } = params;

  return  NextResponse.json({hi:'hello'})

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
