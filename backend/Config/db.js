import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongodb connect successfully`);
  } catch (error) {
    console.log(`error in mongodb ${error}`);
  }
};

export default connectDB;
