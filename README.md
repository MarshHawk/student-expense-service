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
    "tripId": "VHJpcDo1Zjg0ZDkzYmNlMDk1YjVmM2M4ZmQyYWI=",
    "studentName": "Glover",
    "amount": 79.79
  }
}
```

- Run the DB in Docker to use latest Mongo version (TODO docker compose)
```
docker --version
```
and that the following command does not output an error
```
docker info
```
and then
```
docker run -d -p 27017-27019:27017-27019 --name student-expense-db mongo
-- or --
docker start student-expense-db 
```