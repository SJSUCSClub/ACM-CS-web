import connectDB from "../config/dbConn";
import User from "../models/userModel";
import {NextResponse} from "next/server";


export async function GET(){
    await connectDB();
    const topics = await User.find();
    //returns all topics in topic schema
    return NextResponse.json({topics});
}