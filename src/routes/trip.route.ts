import { Express } from "express";
import { getTrips } from "../gateways/trip.gateway";

const routes = (app: Express) => {
    app.route('/trips')
        .get(getTrips)
}

export default routes;
