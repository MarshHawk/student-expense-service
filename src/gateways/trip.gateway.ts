import { Request, Response } from "express";
import Trip from '../models/trip.model';

export const getTrips = (req: Request, res: Response) => {
    Trip.find({}, (err, trips) => {
        if (err) {
            res.send(err);
        }
        res.json(trips);
    });
}