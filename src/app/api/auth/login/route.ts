import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    console.log(req.body);
    console.log(email, password);

    return NextResponse.json(
      { message: "User Logged In successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error while logging in" },
      { status: 500 }
    );
  }
}
