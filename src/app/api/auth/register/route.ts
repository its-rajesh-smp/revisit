import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    console.log(req.body);

    console.log(name, email, password);

    return NextResponse.json(
      { message: "User Registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error while registering" },
      { status: 500 }
    );
  }
}
