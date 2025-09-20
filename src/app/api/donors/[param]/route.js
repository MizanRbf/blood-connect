import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET Method
export const GET = async (req, { params }) => {
  try {
    const { param } = params;

    if (!param) {
      return NextResponse.json({ success: false, donors: [] }, { status: 400 });
    }

    const donorCollection = await dbConnect("donors");

    if (/^[0-9a-fA-F]{24}$/.test(param)) {
      // Search By Id
      const donor = await donorCollection.findOne({ _id: new ObjectId(param) });
      if (!donor) {
        return NextResponse.json(
          {
            success: false,
            donor: null,
            message: "Not Found",
          },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, donor });
    }

    if (param.includes("@")) {
      const donors = await donorCollection.find({ email: param }).toArray();
      return NextResponse.json({ success: true, donors });
    }
    return NextResponse.json({ success: false, donor: null, donors: [] });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        donor: null,
        donors: [],
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

    const donorCollection = await dbConnect("donors");

    const result = await donorCollection.deleteOne({
      _id: new ObjectId(param),
    });

    if (result.deletedCount === 1) {
      return NextResponse.json({ success: true, message: "Donor Deleted" });
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
