import mongoose from "mongoose";

const conncetDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO);
         console.log("MongoDB is conncected");
    } catch (err){
        console.log(err);
    }
}

export default conncetDB;