import { connectDB } from '@/server/config/dbConn';
import Event from '@/server/models/eventModel';
import { NextResponse } from 'next/server';

export async function GET(res) {
    await connectDB();
    const allEvents = await Event.find();
    return NextResponse.json({events: allEvents});
}