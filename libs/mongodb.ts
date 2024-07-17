import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.NODE_ENV);
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;