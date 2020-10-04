import { Express } from "express";
import { getTrips } from "../gateways/trip.gateway";

const routes = (app: Express) => {
    app.route('/trips')
        .get((req, res, next) => {
            // middleware
            console.log(`we will be doing input validation here`)
            next();
        }, getTrips)
}

export default routes;
