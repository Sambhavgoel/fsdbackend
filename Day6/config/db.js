import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB is successfully connected")

    }
    catch(err)
    {
        console.log("Error occured ", err)
        process.exit(1)
    }
}
export default connectDB