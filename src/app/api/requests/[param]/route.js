import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET Method
export const GET = async (req, { params }) => {
  try {
    const { param } = params;

    if (!param) {
      return NextResponse.json(
        { success: false, requests: [] },
        { status: 400 }
      );
    }

    const requestCollection = await dbConnect("requests");

    if (/^[0-9a-fA-F]{24}$/.test(param)) {
      // Search By Id
      const request = await requestCollection.findOne({
        _id: new ObjectId(param),
      });
      if (!request) {
        return NextResponse.json(
          { success: false, donor: null, message: "Not Found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, request });
    }

    if (param.includes("@")) {
      const requests = await requestCollection.find({ email: param }).toArray();
      return NextResponse.json({ success: true, requests });
    }
    return NextResponse.json(
      {
        success: false,
        message: "Not Found",
        request: null,
        requests: [],
      },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        requests: [],
        error: error.message,
      },
      { status: 500 }
    );
  }
};

// Delete Method
export const DELETE = async (req, { params }) => {
  try {
    const { param } = params;
    if (!param || !/^[0-9a-fA-F]{24}$/.test(param)) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid ID required",
        },
        { status: 500 }
      );
    }

    const requestCollection = await dbConnect("requests");

    const result = await requestCollection.deleteOne({
      _id: new ObjectId(param),
    });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true, message: "request Deleted" });
    } else {
      return NextResponse.json({ success: false, message: "Not Found" });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      {
        status: 500,
      }
    );
  }
};
