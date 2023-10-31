import { Event } from "@/server/models";
import { NextResponse } from "next/server";

/**
 * @api {GET} /events
 *
 * @returns {Object} - created event
 */
export async function GET(req, { params }) {
  const eventId = params.id;
  try {
    const event = await Event.findById(eventId).exec();
    return NextResponse.json({ event }, { status: 200 });
  } catch (error) {
    console.log("/api/event/[id]/GET: ", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
