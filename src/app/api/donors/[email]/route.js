import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (!params.email) {
      return NextResponse.json({ success: false, donors: [] }, { status: 400 });
    }

    const donorCollection = await dbConnect("donors");

    const donorsByEmail = await donorCollection
      .find({ email: params.email })
      .toArray();

    return NextResponse.json({
      success: true,
      donors: donorsByEmail,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        donors: [],
        error: error.message,
      },
      { status: 500 }
    );
  }
};
