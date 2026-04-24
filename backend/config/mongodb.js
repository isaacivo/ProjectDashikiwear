import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
        console.log("Connected DB:", mongoose.connection.name); // 🔥 ADD THIS
    });

    await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;