import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const URL= process.env.MONGO_URI;
 
export const connectDB = async ()=> {
  await mongoose.connect(URL)
  .then(() => {console.log("DB connected")})
}


