import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/trip.route';
import { config } from "dotenv";
import { seedTrips } from './gateways/trip.gateway';
config();

const PORT = process.env.PORT || 3033;
const app = express();

//TODO cors .env configuration
app.use(cors({
    origin: '*',
    credentials: true
}));

routes(app);

mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    await seedTrips();
    app.listen(PORT, () => {
        console.log(`Your server is running on port ${PORT}`);
    });
})