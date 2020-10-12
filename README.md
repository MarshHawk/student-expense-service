### Start up
- `npm install`
- `npm start` or `npm run watch`
- It will use port 3033 by default
- A query:
```graphql
{
  trips {
    edges {
      node {
        id
        title
        total
        average
        students {
          name
          totalTripExpenses
        }
        expenses {
          studentName
          amount
        }
      }
    }
  }
}
```
- A mutation:
```graphql
mutation AddExpenseToTrip($input: AddExpenseToTripInput!) {
  addExpenseToTrip(input: $input) {
    clientMutationId
    trip {
      total
    }
  }
}

{
  "input": {
    "clientMutationId": "ID!",
    "tripId": ""VHJpcDo1Zjg0ZDkzYmNlMDk1YjVmM2M4ZmQyYWI="",
    "studentName": "Glover",
    "amount": 79.79
  }
}
```