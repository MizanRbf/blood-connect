import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { email } = params;
  if (!email)
    return NextResponse.json(
      { success: false, message: "email need" },
      { status: 500 }
    );

  try {
    const userCollection = await dbConnect("users");

    const result = await userCollection.findOne({ email });

    return NextResponse.json({ success: true, user: result });
  } catch (error) {
    return NextResponse.json(
      { succuss: false, message: error.message },
      { status: 500 }
    );
  }
};
