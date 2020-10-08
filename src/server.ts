import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/trip.route';
import helmet from 'helmet';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { config } from "dotenv";
import { app } from './app'
import { seedTrips } from './gateways/trip.gateway';
config();

const PORT = process.env.PORT || 3033;

// TODO cors .env configuration
app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(helmet());

routes(app);

const mongoServer = new MongoMemoryServer();

// mongodb-memory-server is only used to ship this exercise with npm install only
mongoServer.getUri().then((mongoUri) => {
    // ${process.env.MONGO_URI}/${process.env.DATABASE_NAME}
    mongoose.connect(`${mongoUri}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
        await seedTrips();
        app.listen(PORT, () => {
            console.log(`Your server is running on port ${PORT}`);
        });
    });
});

