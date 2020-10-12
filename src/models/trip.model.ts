import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Types = mongoose.Types;

export const tripSchema = new Schema({
    title: String,
    total: Types.Decimal128,
    average: Types.Decimal128,
    students: [{
        name: String,
        totalTripExpenses: Types.Decimal128,
    }],
    expenses: [{
        studentName: String,
        amount: Types.Decimal128,
        type: String,
        date: Date
      }]
  }, { timestamps: true });