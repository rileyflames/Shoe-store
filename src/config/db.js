import mongoose from 'mongoose';

const connectDB = async () =>{
    // try the connection
   try {
         
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 Connected to MongoDB");

   } catch (error) {
    console.error('🔴 MongoDB connection error', error.message);
    process.exit(1)
    
   }
};


export default connectDB