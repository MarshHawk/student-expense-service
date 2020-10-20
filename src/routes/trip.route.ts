import { Express } from "express";
import { getTrips } from "../gateways/trip.gateway";

const routes = (app: Express) => {
    app.route('/trips')
        .get((req, res) => getTrips().then((result) => res.json(result)))
}

export default routes;
