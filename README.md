### Start up
- `npm install`
- `npm start` or `npm run watch`
- It will use port 3033 by default
- The query
```
{
  trips {
    edges {
      node {
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
}```