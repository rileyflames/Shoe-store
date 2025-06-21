// src/server.js
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// connect DB 
connectDB();

// listen 
app.listen(PORT, ()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    
})