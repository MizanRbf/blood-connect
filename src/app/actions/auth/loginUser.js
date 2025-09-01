"use server";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";
export const loginUser = async (payload) => {
  const { email, password } = payload;
  console.log(payload);

  const userCollection = dbConnect("users");

  const user = await userCollection.findOne({ email });

  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password, user.password);

  if (!isPasswordOk) return null;

  return {
    id: user._id.toString(),
    name: user.name || "No Name",
    email: user.email,
  };
};
