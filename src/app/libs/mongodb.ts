import mongoose from "mongoose";

const connectProfileDB = async () => {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to profile database");
    } catch (error) {
        console.log(error);
    }
};

export default connectProfileDB;