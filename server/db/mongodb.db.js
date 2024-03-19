import mongoose from "mongoose";

const mongodbConnection = async() =>{
    try {
      const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)  
      console.log(`Mongodb Connected !! DB host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection failed", error)
        process.exit(1)
    }

}

export default mongodbConnection