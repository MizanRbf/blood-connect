import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const donorCollection = await dbConnect("requests");

    const result = await donorCollection
      .find({})
      .limit(6)
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json({ success: true, donors: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
