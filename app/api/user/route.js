import { connectDB } from '@/server/config/dbConn';
import User from '@/server/models/userModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, image } = await req.json();

  const userExists = await User.findOne({ email: email })

  if (!userExists) {
    return NextResponse.json({ message: 'User not found' });
  } else {
    return NextResponse.json({ userExists });
  }
}