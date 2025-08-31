"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  // validation
  const { email, password } = payload;
  if (!email || !password) return { success: false };

  const userCollection = dbConnect("users");

  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;

    return {
      success: true,
      acknowledged,
      insertedId: insertedId.toString(),
    };
  }

  return { success: false, message: "User Already Exist" };
};
