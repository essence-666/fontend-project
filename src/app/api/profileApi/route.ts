import { NextResponse, NextRequest } from "next/server";
import connectProfileDB from "../../libs/mongodb";
import Profile from "../../models/profile";

export async function POST(request: NextRequest) {
    const {name, place, email, description} = await request.json();
    await connectProfileDB();
    await Profile.create({name, place, email, description});
    return NextResponse.json({message: "Profile created"}, {status: 201});
}

export async function GET() {
    await connectProfileDB();
    const profile = await Profile.find();
    return NextResponse.json({profile});
}