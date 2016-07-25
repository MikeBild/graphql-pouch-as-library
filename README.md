# Using Express and GraphQL-Pouch as a Library

## How to use

```bash
npm install
npm start
```

## Some example queries

__Query__
```graphql
{
  settingByKey(key: "mcmc") {
    id
    rev
    key
  }
}
```

__Result__

```json
{
  "data": {
    "settingByKey": {
      "id": "A",
      "rev": "B",
      "key": "mcmc"
    }
  }
}
```
