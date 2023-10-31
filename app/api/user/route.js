import { User } from "@/server/models";
// import { connectDB } from "@/server/config/dbConn";
// import User from "@/server/models/userModel";
import { NextResponse } from "next/server";

/**
 * @api {GET}
 *
 * @returns {Array.<User>} - all members
 */
export async function GET(req) {
  try {
    // await connectDB();
    const members = await User.find();

    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    console.log("/api/user/GET: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  const { name, email, image } = await req.json();

  const userExists = await User.findOne({ email: email });

  if (!userExists) {
    return NextResponse.json({ message: "User not found" });
  } else {
    return NextResponse.json({ userExists });
  }
}
