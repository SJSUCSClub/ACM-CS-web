import { connectDB } from '@/server/config/dbConn';
import Event from '@/server/models/eventModel';
import { NextResponse } from 'next/server';

export async function GET(res) {
    await connectDB();
    const allEvents = await Event.find();
    return NextResponse.json({events: allEvents});
}

export async function POST(req) {
    const eventInfo = await req.json();
    await connectDB();

    const event = await Event.findOne({title: eventInfo.title});
    if(!event)
    {
        await Event.create({
            title: eventInfo.title,
            description: eventInfo.description,
            date: eventInfo.date,
            location: eventInfo.location,
            maxAttendees: eventInfo.maxAttendees,
            paidMemberOnly: eventInfo.paidMemberOnly,
            type: eventInfo.type
        });
    }

    return NextResponse.json({message: 'Event Created'});
}