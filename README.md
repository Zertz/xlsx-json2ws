# json2xlsx-ws [![NPM version](https://badge.fury.io/js/json2xlsx-ws.png)](http://badge.fury.io/js/json2xlsx-ws)

Converts object arrays to xlsx worksheets

```
yarn add json2xlsx-ws
```

## Usage

```js
import { json2xlsx } from "json2xlsx-ws";
import * xslx from "xlsx";

// Headers are generated from the first object in the data array
const data = [
  {
    number: "number",
    string: "string",
    date: "date",
  },
  {
    number: 1,
    string: "string1",
    date: Date(),
  },
  {
    number: 2,
    string: "string2",
    date: Date(),
  },
];

xlsx.writeFile(
  {
    SheetNames: ["Sheet1", "Sheet2"],
    Sheets: {
      Sheet1: json2xlsx(data),
      Sheet2: json2xlsx(data),
    },
  },
  "workbook.xlsx"
);
```

## Contributing

I'd love for you to contribute and make json2xlsx-ws even better than it is today!

### Getting started

```
git clone https://github.com/Zertz/json2xlsx-ws.git
yarn
yarn test
```
