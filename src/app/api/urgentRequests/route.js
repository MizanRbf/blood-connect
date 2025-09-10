import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const requestCollection = await dbConnect("requests");

    const result = await requestCollection.find({}).toArray();
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
};
