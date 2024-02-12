import { connectDB } from "@/server/config/dbConn";
import Event from "@/server/models/eventModel";
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(res) {
  // await connectDB();
  try {
    const allEvents = await Event.find();
    return NextResponse.json({ events: allEvents }, { status: 200 });
  } catch (error) {
    console.log("/api/event/GET: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  const eventInfo = await req.json();
  // await connectDB();

  console.log(eventInfo);

  try {
    const event = await Event.findOne({ title: eventInfo.title });
    if (!event) {

      const googleEvent = {
        'summary': eventInfo.title,
        'description': eventInfo.description,
        'start': {
          'dateTime': eventInfo.start,
          'timeZone': 'America/Los_Angeles',
        },
        'end': {
          'dateTime': eventInfo.end,
          'timeZone': 'America/Los_Angeles',
        },
        'reminders': {
          'useDefault': false,
          'overrides': [
            { 'method': 'email', 'minutes': 24 * 60 },
            { 'method': 'popup', 'minutes': 10 },
          ],
        },
      }

      const result = axios.post('http://localhost:3001/events', googleEvent)
        .then((res) => {
          console.log(`statusCode: ${res.message}`)
          console.log(res)
        })
        .catch((error) => {
          console.error(error)
        })

      const newEvent = await Event.create({
        image: eventInfo.image,
        title: eventInfo.title,
        description: eventInfo.description,
        tags: eventInfo.tags,
        start: eventInfo.start,
        end: eventInfo.end,
        deadline: eventInfo.deadline,
        location: eventInfo.location,
        presenter: eventInfo.presenter,
        type: eventInfo.type,
        audienceType: eventInfo.audienceType,
        maxAttendees: eventInfo.maxAttendees,
        paidMemberOnly: eventInfo.paidMemberOnly,
      });
      return NextResponse.json({ newEvent }, { status: 200 });
    }
    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.log("/api/event/POST: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
