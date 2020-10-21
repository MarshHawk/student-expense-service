import mongoose from 'mongoose';
import { tripSchema } from '../models/trip.model';
import { ITrip } from "../interfaces";

const Trip = mongoose.model('Trip', tripSchema);
const toDecimal128 = (value: number): mongoose.Types.Decimal128 => mongoose.Types.Decimal128.fromString(value.toString());
const toObjectId = (value: string): mongoose.Types.ObjectId => mongoose.Types.ObjectId(value);

export const projectTripFieldDecimalFieldsAsDoubles = () => ({
    $addFields: {
        id: { $toString: "$_id" },
        total: { $toDouble: "$total" },
        average: { $toDouble: "$average" },
        expenses: {
            "$map": {
                "input": "$expenses",
                "as": "row",
                "in": {
                    studentName: "$$row.studentName",
                    amount: { $toDouble: "$$row.amount" }
                }
            }
        },
        students: {
            "$map": {
                "input": "$students",
                "as": "row",
                "in": {
                    name: "$$row.name",
                    totalTripExpenses: { $toDouble: "$$row.totalTripExpenses" }
                }
            }
        }
    }
})

// Reads

export const getTrips = async (): Promise<ITrip[]> => {
    return await Trip.aggregate<ITrip>([
        projectTripFieldDecimalFieldsAsDoubles(),
        { $project: { _id: 0 } }
    ]).exec();
}

export const getTripById = async (id: string): Promise<ITrip> => {
    return Trip.aggregate([{ $match: { _id: toObjectId(id) } }, projectTripFieldDecimalFieldsAsDoubles()]).exec().then((result: ITrip[]) => result[0]);
}

// Writes

export const addExpenseToTrip = async (tripId: string, studentName: string, amount: number) => {
    await Trip.updateOne(
        { _id: toObjectId(tripId) },
        [{
            $set: {
                total: { $sum: ["$total", toDecimal128(amount)] },
                expenses: { $concatArrays: ['$expenses', [{ studentName: studentName, amount: toDecimal128(amount) }]] },
                students: {
                    $map: {
                        input: "$students", as: "s",
                        in: {
                            $cond: {
                                if: { $eq: ['$$s.name', studentName] },
                                then: { name: '$$s.name', totalTripExpenses: { $sum: ["$$s.totalTripExpenses", toDecimal128(amount)] } },
                                else: '$$s'
                            }
                        }
                    }
                }
            },
        }, { $set: { average: { $round: [{ $avg: "$students.totalTripExpenses" }, 2] } } }
        ]
    ).exec();
}

export const addStudentToTrip = (): Promise<any[]> => {
    throw 'Not implemented'
}

export const removeExpenseFromTrip = (): Promise<any[]> => {
    throw 'Not implemented'
}

// TODO add remove trips, payments

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