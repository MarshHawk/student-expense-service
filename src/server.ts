import express from 'express';
import mongoose from 'mongoose';
import seeder from './seeder';
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3033;

const app = express();

mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    await seeder();
    app.listen(PORT, () => {
        console.log(`Your server is running on port ${PORT}`);
    });
})