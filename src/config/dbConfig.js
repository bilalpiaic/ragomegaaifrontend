import mongoose from "mongoose";

const connection = {}

export const dbConnect = async()=>{
    if(connection.isConnected){
        return
    }
    const db = await mongoose.connect("mongodb://localhost:27017/Nextjs")
    connection.isConnected = mongoose.connections[0].readyState
}