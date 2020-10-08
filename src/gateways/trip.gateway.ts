import { Request, Response } from "express";
import mongoose from 'mongoose';
import { tripSchema } from '../models/trip.model';

const Trip = mongoose.model('Trip', tripSchema);

export const getTrips = (req: Request, res: Response) => {
    Trip.aggregate([
        { $project: { _id: 0 } }
    ]).exec((err, trips) => {
        if (err) {
            res.send(err);
        }
        res.json(trips);
    });
}

export const seedTrips = async () => {
    const trips = [{
        title: "Together Trip",
        total: 217.18,
        average: 72.39,
        students: [
            { name: "Adriana", total_trip_expenses: 53.54 },
            { name: "Bao", total_trip_expenses: 50.23 },
            { name: "Camden", total_trip_expenses: 113.41 }],
        expenses: [
            { student_name: "Adriana", amount: 5.75, type: "Food", date: new Date() },
            { student_name: "Adriana", amount: 35, type: "Food", date: new Date() },
            { student_name: "Adriana", amount: 12.79, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 12, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 15, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 23.23, type: "Food", date: new Date() },
            { student_name: "Camden", amount: 10, type: "Food", date: new Date() },
            { student_name: "Camden", amount: 20, type: "Food", date: new Date() },
            { student_name: "Camden", amount: 38.41, type: "Food", date: new Date() },
            { student_name: "Camden", amount: 45, type: "Food", date: new Date() }]
    }, {
        title: "To Another Land",
        total: 300.45,
        average: 75.11,
        students: [
            { name: "Adriana", total_trip_expenses: 5.75 },
            { name: "Bao", total_trip_expenses: 250.62 },
            { name: "Chandra", total_trip_expenses: 34.08 },
            { name: "Li", total_trip_expenses: 10 }],
        expenses: [
            { student_name: "Adriana", amount: 5.75, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 25.55, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 11.19, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 213.88, type: "Car Rental", date: new Date() },
            { student_name: "Chandra", amount: 2.33, type: "Food", date: new Date() },
            { student_name: "Chandra", amount: 16.15, type: "Food", date: new Date() },
            { student_name: "Chandra", amount: 11.38, type: "Misc.", date: new Date() },
            { student_name: "Chandra", amount: 4.22, type: "Food", date: new Date() },
            { student_name: "Li", amount: 10, type: "Tip", date: new Date() }]
    },
    {
        title: "The Mountain",
        total: 89.76,
        average: 17.95,
        students: [
            { name: "Adriana", total_trip_expenses: 18.54 },
            { name: "Bao", total_trip_expenses: 12 },
            { name: "Chandra", total_trip_expenses: 4.22 },
            { name: "Li", total_trip_expenses: 10 },
            { name: "Camden", total_trip_expenses: 45 }],
        expenses: [
            { student_name: "Adriana", amount: 5.75, type: "Food", date: new Date() },
            { student_name: "Adriana", amount: 12.79, type: "Food", date: new Date() },
            { student_name: "Bao", amount: 12, type: "Food", date: new Date() },
            { student_name: "Chandra", amount: 4.22, type: "Food", date: new Date() },
            { student_name: "Li", amount: 10, type: "Tip", date: new Date() },
            { student_name: "Camden", amount: 45, type: "Food", date: new Date() }]
    },
    {
        title: "Over the River",
        total: 11.50,
        average: 5.75,
        students: [
            { name: "Bao", total_trip_expenses: 5.75 },
            { name: "Li", total_trip_expenses: 5.75 }],
        expenses: [
            { student_name: "Bao", amount: 5.75, type: "Food", date: new Date() },
            { student_name: "Li", amount: 5.75, type: "Food", date: new Date() }]
    }
    ];
    await mongoose.connection.db.dropDatabase();
    await Trip.collection.insertMany(trips);
}