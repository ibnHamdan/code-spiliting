
const add = require('./add');
const multi = require('./multi');
const sub = require('./divid');


exports.operations = function (num1, num2) {
  return console.log("sum: " + add(num1, num2)+ "multi: " + multi(num1, num2)+ "sub: " + sub(num1, num2))
}