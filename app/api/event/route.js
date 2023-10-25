import { connectDB } from '@/server/config/dbConn';
import Event from '@/server/models/eventModel';
import { NextResponse } from 'next/server';

export async function GET(res) {
    await connectDB();
    try {
        const allEvents = await Event.find();
        return NextResponse.json({ events: allEvents }, { status: 200 });
    } catch(error) {
        console.log("/api/event/GET: ", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function POST(req) {
    const eventInfo = await req.json();
    await connectDB();

    try {
        const event = await Event.findOne({title: eventInfo.title});
        if(!event)
        {
            const newEvent = await Event.create({
                title: eventInfo.title,
                description: eventInfo.description,
                date: eventInfo.date,
                location: eventInfo.location,
                maxAttendees: eventInfo.maxAttendees,
                paidMemberOnly: eventInfo.paidMemberOnly,
                type: eventInfo.type
            });
            return NextResponse.json({ newEvent }, { status: 200 });
        }
        return NextResponse.json({ event }, { status: 200 });
    } catch(error) {
        console.log("/api/event/POST: ", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}