import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    if (connected) {
        return;
    }

    try {
        if (process.env.MONGODB_URI) {
            await mongoose.connect(process.env.MONGODB_URI);
            connected = true;
        }
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;
