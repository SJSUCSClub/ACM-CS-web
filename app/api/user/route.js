import { connectDB } from '@/server/config/dbConn';
import User from '@/server/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, image } = await req.json();
  await connectDB();

  const userExists = await User.findOne({ email: profile.email })

  if (!userExists) {
    await User.create({
      name: profile.name,
      email: profile.email,
      image: profile.image, 
    })
    return NextResponse.json({ message: 'User created' });
  } else {
    return NextResponse.json({ userExists });
  }  
}