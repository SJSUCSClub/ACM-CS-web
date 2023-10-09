import { connectDB } from '@/server/config/dbConn';
import User from '@/server/models/userModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name } = await req.json();
  await connectDB();
  await User.create({ name });
  return NextResponse.json({ message: 'User created' });
}