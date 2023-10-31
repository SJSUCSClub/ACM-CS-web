import { User } from "@/server/models";
import { NextResponse } from "next/server";

/**
 * @api {PATCH}
 *
 * @param {Object} - js object, passed in with body, with updated fields
 *                 - object should not include '_id' field
 * @paramExample
 *      {
 *          major: Computer Science,
 *          linkedin: https://...,
 *          role: admin
 *      }
 *
 * @returns {Object} - updated user
 */
export async function PATCH(req, { params }) {
  const userId = params.userId;
  const update = await req.json();

  try {
    await User.findByIdAndUpdate(userId, update);
    const updatedUser = await User.findById(userId);
    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    console.log("/api/user/[userId]/PATCH: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
