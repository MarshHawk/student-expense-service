import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Types = mongoose.Types;

export const tripSchema = new Schema({
    title: String,
    total: Types.Decimal128,
    average: Types.Decimal128,
    students: [{
        name: String,
        total_trip_expenses: Types.Decimal128
    }],
    expenses: [{
        student_name: String,
        amount: Types.Decimal128,
        type: String,
        date: Date
      }]
  }, { timestamps: true });

//export const Trip = model('Trip', tripSchema);

 //export Trip;
//export default model('trip', tripSchema);;