import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "../../libs/mongodb";
import Profile from "../../models/profile";

export async function POST(request: NextRequest) {
    const {name, place, email, description} = await request.json();
    await connectMongoDB();
    await Profile.create({name, place, email, description});
    return NextResponse.json({message: "Profile created"}, {status: 201});
}