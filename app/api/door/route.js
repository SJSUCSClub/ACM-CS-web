import { connectDB } from "@/server/config/dbConn";
import Door from "@/server/models/doorModel";
import { NextResponse } from "next/server";

export async function GET(res) {
    await connectDB();
    try {
        const doorStatus = await Door.find();
        return NextResponse.json({ door: doorStatus }, { status: 200 });
    } catch (error) {
        console.log("/api/event/GET: ", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function POST(req) {
    const doorInfo = await req.json();
    await connectDB();

    // we really only need to store the latest door status
    // so delete any previous statuses
    await Door.deleteMany();

    try {
        const newStatus = await Door.create({
            open: doorInfo.open,
        });
        return NextResponse.json({ newStatus }, { status: 200 });
    } catch (error) {
        console.log("/api/event/POST: ", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
