// const multiply = (a, b) => a * b;

// const n = multiply(5, 10);

// console.log(n);

// const fs = require('fs'); // some file in the node js install called fs.js

// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//   console.log('done creating file');
// });

// const daysOfWeek = require('./days-of-week'); //// --- > {}

// console.log(daysOfWeek);

// daysOfWeek.weekdays  ---> {}.weekdays

// {}.getWeekday ----> undefined()

// Don't specify path when module is in node_modules
const request = require('request');

request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
  console.log(body);
});
