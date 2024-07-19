import { NextResponse, NextRequest } from "next/server";
import Flower from "../../models/flower";
import connectFlowersDB from "../../libs/mongodbFlowers";

export async function POST(request: NextRequest) {
    const {name, scientificName, location, frequencyWatering, wateringChanges} = await request.json();
    await connectFlowersDB();
    await Flower.create({name, scientificName, location, frequencyWatering, wateringChanges});
    return NextResponse.json({message: "Flower created"}, {status: 201});
}

export async function GET() {
    await connectFlowersDB();
    const flower = await Flower.find();
    return NextResponse.json({flower})
}