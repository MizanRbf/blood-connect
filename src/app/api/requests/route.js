import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const requestData = await req.json();
    const requestCollection = await dbConnect("requests");

    const result = await requestCollection.insertOne(requestData);

    // console.log(result.insertedId);
    return NextResponse.json({
      success: true,
      requestId: result.insertedId,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const requestCollection = await dbConnect("requests");

    const allrequests = await requestCollection.find({}).toArray();

    return NextResponse.json({
      success: true,
      requests: allrequests,
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
};
