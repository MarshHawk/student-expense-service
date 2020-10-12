export interface IExpense {
    studentName: string;
    amount: number;
    type: string;
    date: Date;
}

export interface IStudent {
    name: string;
    totalTripExpenses: number;
}

export interface ITrip {
    title: string;
    total: number;
    average: number;
    students: IStudent[];
    expenses: IExpense[];
}