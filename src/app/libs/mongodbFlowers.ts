import mongoose from "mongoose";

const connectFlowersDB = async () => {
    const mongoURI = process.env.MONGODBFLOWERS_URI;

    if (!mongoURI) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }
    try {
        const connection = await mongoose.createConnection(mongoURI).asPromise();
        console.log("Connected to flowers database");
        return connection;
    } catch (error) {
        console.log(error);
    }
};

export default connectFlowersDB;