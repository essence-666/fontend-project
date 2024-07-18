import connectMongoDB from "@/app/libs/mongodb";
import Profile from "@/app/models/profile";
import { request } from "http";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest, {params} : { params: { id: string } }) {
    const {id} = params;
    const { newName: name, newPlace: place, newEmail: email, newDescription: description} = await request.json();
    await connectMongoDB();
    await Profile.findByIdAndUpdate(id, {name, place, email, description});
    return NextResponse.json({message: "Profile is updated"}, {status: 200});
}
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const { id } = params;
    await connectMongoDB();
    const profile = await Profile.findOne({_id: id});
    return NextResponse.json({profile}, {status:200});
}   