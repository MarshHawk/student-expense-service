import mongoose, { models } from 'mongoose';
import Trip from './models/Trip.model';

const trips = {
    title: "Together trip",
    total: 217.18,
    average: 72.394,
    students: [{ name: "Adriana", total_trip_expenses: 53.54}, { name: "Bao", total_trip_expenses: 50.23 }, { name: "Camden", total_trip_expenses: 113.41 }],
    expenses: [{ student_name: "Adriana", amount: 5.75, type: "Food", date: new Date() },
    { student_name: "Adriana", amount: 35, type: "Food", date: new Date() },
    { student_name: "Adriana", amount: 12.79, type: "Food", date: new Date() },
    { student_name: "Bao", amount: 12, type: "Food", date: new Date() },
    { student_name: "Bao", amount: 15, type: "Food", date: new Date() },
    { student_name: "Bao", amount: 23.23, type: "Food", date: new Date() },
    { student_name: "Camden", amount: 10, type: "Food", date: new Date() },
    { student_name: "Camden", amount: 20, type: "Food", date: new Date() },
    { student_name: "Camden", amount: 38.41, type: "Food", date: new Date() },
    { student_name: "Camden", amount: 45, type: "Food", date: new Date() }]
};

export default async () => {
    await mongoose.connection.db.dropDatabase();
    await Trip.collection.insertMany([trips]);
}