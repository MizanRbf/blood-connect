import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

// POST Method
export async function POST(req) {
  try {
    const donorData = await req.json();
    const donorCollection = await dbConnect("donors");

    const result = await donorCollection.insertOne(donorData);

    // console.log(result.insertedId);
    return NextResponse.json({
      success: true,
      donorId: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// GET Method
export async function GET() {
  try {
    const donorCollection = await dbConnect("donors");

    const allDonors = await donorCollection.find({}).toArray();

    return NextResponse.json({
      success: true,
      donors: allDonors,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
