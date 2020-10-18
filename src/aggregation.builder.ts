export const tripFieldsStage = () => ({
    $addFields: {
        id: { $toString: "$_id" },
        total: { $toDouble: "$total" },
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