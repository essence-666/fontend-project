import { NextResponse, NextRequest } from "next/server";
import Flower from "../../../models/flower";
import connectFlowersDB from "../../../libs/mongodbFlowers";

export async function PUT(request:NextRequest, {params} : { params: { id: string } }) {
    const {id} = params;
    const { newName: name, newScientificName: scientificName, newLocation: location, newFrequencyWatering: frequencyWatering, newWateringChanges: wateringChanges} = await request.json();
    await connectFlowersDB();
    await Flower.findByIdAndUpdate(id, {name, scientificName, location, frequencyWatering, wateringChanges});
    return NextResponse.json({message: "Profile is updated"}, {status: 200});
}
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const { id } = params;
    await connectFlowersDB();
    const profile = await Flower.findOne({_id: id});
    return NextResponse.json({profile}, {status:200});
}   