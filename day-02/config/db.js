import mongoose from "mongoose";
const dburl = process.env.MONGODB_URI;
export const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("DB connected sucessfully.");
  } catch (error) {
    console.log("Db connection error:", error);
  }
};
// connectDB();
