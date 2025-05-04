import mongoose from "mongoose"
// import env from "dotenv";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`);
        process.exit(1); // Optional but helpful to stop app on DB failure
    }
};
export default connectDB;