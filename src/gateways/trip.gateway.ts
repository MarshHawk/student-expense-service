import { Request, Response } from "express";
import mongoose from 'mongoose';
import { tripSchema } from '../models/trip.model';

const Trip = mongoose.model('Trip', tripSchema);

export const getTrips = (): Promise<any[]> => {
    return Trip.aggregate([
        { $project: { _id: 0 } }
    ]).exec();
}

export const seedTrips = async () => {
    const trips = [{
        title: "Together Trip",
        total: 217.18,
        average: 72.39,
        students: [
            { name: "Adriana", totalTripExpenses: 53.54 },
            { name: "Bao", totalTripExpenses: 50.23 },
            { name: "Camden", totalTripExpenses: 113.41 }],
        expenses: [
            { studentName: "Adriana", amount: 5.75, type: "Food", date: new Date() },
            { studentName: "Adriana", amount: 35, type: "Food", date: new Date() },
            { studentName: "Adriana", amount: 12.79, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 12, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 15, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 23.23, type: "Food", date: new Date() },
            { studentName: "Camden", amount: 10, type: "Food", date: new Date() },
            { studentName: "Camden", amount: 20, type: "Food", date: new Date() },
            { studentName: "Camden", amount: 38.41, type: "Food", date: new Date() },
            { studentName: "Camden", amount: 45, type: "Food", date: new Date() }]
    }, {
        title: "To Another Land",
        total: 300.45,
        average: 75.11,
        students: [
            { name: "Adriana", totalTripExpenses: 5.75 },
            { name: "Bao", totalTripExpenses: 250.62 },
            { name: "Chandra", totalTripExpenses: 34.08 },
            { name: "Li", totalTripExpenses: 10 }],
        expenses: [
            { studentName: "Adriana", amount: 5.75, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 25.55, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 11.19, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 213.88, type: "Car Rental", date: new Date() },
            { studentName: "Chandra", amount: 2.33, type: "Food", date: new Date() },
            { studentName: "Chandra", amount: 16.15, type: "Food", date: new Date() },
            { studentName: "Chandra", amount: 11.38, type: "Misc.", date: new Date() },
            { studentName: "Chandra", amount: 4.22, type: "Food", date: new Date() },
            { studentName: "Li", amount: 10, type: "Tip", date: new Date() }]
    },
    {
        title: "The Mountain",
        total: 89.76,
        average: 17.95,
        students: [
            { name: "Adriana", totalTripExpenses: 18.54 },
            { name: "Bao", totalTripExpenses: 12 },
            { name: "Chandra", totalTripExpenses: 4.22 },
            { name: "Li", totalTripExpenses: 10 },
            { name: "Camden", totalTripExpenses: 45 }],
        expenses: [
            { studentName: "Adriana", amount: 5.75, type: "Food", date: new Date() },
            { studentName: "Adriana", amount: 12.79, type: "Food", date: new Date() },
            { studentName: "Bao", amount: 12, type: "Food", date: new Date() },
            { studentName: "Chandra", amount: 4.22, type: "Food", date: new Date() },
            { studentName: "Li", amount: 10, type: "Tip", date: new Date() },
            { studentName: "Camden", amount: 45, type: "Food", date: new Date() }]
    },
    {
        title: "Over the River",
        total: 11.50,
        average: 5.75,
        students: [
            { name: "Bao", totalTripExpenses: 5.75 },
            { name: "Li", totalTripExpenses: 5.75 }],
        expenses: [
            { studentName: "Bao", amount: 5.75, type: "Food", date: new Date() },
            { studentName: "Li", amount: 5.75, type: "Food", date: new Date() }]
    }
    ];
    await mongoose.connection.db.dropDatabase();
    await Trip.collection.insertMany(trips);
}