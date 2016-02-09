# json2xlsx-ws [![Build Status](https://travis-ci.org/Zertz/json2xlsx-ws.png)](https://travis-ci.org/Zertz/json2xlsx-ws) [![NPM version](https://badge.fury.io/js/json2xlsx-ws.png)](http://badge.fury.io/js/json2xlsx-ws)

Removes the value at the specified path, also traversing object arrays.

```js
npm i json2xlsx-ws --save
npm i xlsx --save
```

## Usage

```js
const json2xlsx-ws = require('json2xlsx-ws')
const xslx = require('xlsx')

// First object in the data array represents headers
let data = [{
  number: 'number',
  string: 'string',
  date: 'date'
}, {
  number: 1,
  string: 'string1',
  date: Date()
}, {
  number: 2,
  string: 'string2',
  date: Date()
}]

xlsx.writeFile({
  SheetNames: ['Sheet1'],
  Sheets: {
    Sheet1: json2xlsx-ws(data)
  }
}, 'workbook.xlsx')
```

## Contributing

I'd love for you to contribute and make json2xlsx-ws even better than it is today!

### Getting started

```
git clone https://github.com/Zertz/json2xlsx-ws.git
npm install
npm test
```

### Guidelines

- [Standard](https://github.com/feross/standard) style
- Use ES2015 features when appropriate
