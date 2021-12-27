import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// load config file
// dotenv.config();
// dotenv.config({ path: './.env' });

// Initialize packages
const app = express()

// body parser middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routing middleware
app.use('/posts', postRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

// const MONGO_URI = process.env.MONGO_URI;  
const MONGO_URI = 'mongodb+srv://mern-memories:memories123@mern-memories.6bakd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.listen(PORT, console.log(`howdy developer, Server running on port ${PORT}`))


async function connectDB() {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

connectDB();
