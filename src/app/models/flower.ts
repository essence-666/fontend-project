import mongoose, {Schema} from "mongoose";

const flowerSchema = new Schema(
    {
        name: String,
        scientificName: String,
        location: String,
        frequencyWatering: Number,
        wateringChanges: String
    },
    {
        timestamps: true
    }
);

const Flower = mongoose.models.Flower || mongoose.model("Flower", flowerSchema);

export default Flower;