
const add = require('./add');
const multi = require('./multi');
const sub = require('./divid');



function operations(num1, num2) {
  return console.log("sum: " + add(num1, num2), "multi: " + multi(num1, num2), "sub: " + sub(num1, num2))
}


export default operations;
//////
// function chunks(arr, size) {
//   let output = [];
//   for (let i = 0; i < arr.length; i += size) {
//     output.push(arr.slice(i, i + size));
//   }
//   return output;
// }

// chunks([1,2,3,4,5,6,7,8,9,10], 3);

// function equals(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i in arr1) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }
// equals([1,2,3,'hello'], [1,2,3,'hello']);

// function max(arr, gt) {
//   return arr.slice(1).reduce((max, cur) => gt(max, cur)?max:cur, arr[0]);
// }
// max([{i:0,v:1},{i:1,v:9},{i:2,v:-2}], (a, b) => a.v > b.v);


// function shuffle(arr) {
//   const a = arr.slice();
//   for (let i = a.length; i; i--) {
//     let j = Math.floor(Math.random() * i);
//     [a[i - 1], a[j]] = [a[j], a[i - 1]];
//   }
//   return a;
// }
// shuffle([1, 2, 3, 4])
// // might return [2, 4, 1, 3] (or something)

// function takeWhile(arr, f) {
//   let ok = true;
//   return arr.filter(e => ok && (ok = f(e)));
// }
// takeWhile([1, 2, 3, 4], e => e < 3);
// // returns [1, 2]

// function unique(arr, f) {
//   const vArr = arr.map(f);
//   return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);
// }
// unique([{i:0,v:2},{i:1,v:3},{i:2,v:2}], e => e.v);
// // returns [{i:0,v:2},{i:1,v:3}]

// function zip(...arrs) {
//   const resultLength = Math.min(...arrs.map(a => a.length));
//   return new Array(resultLength)
//     .fill(0)
//     .map((_, i) => arrs.map(a => a[i]));
// }
// zip([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// // returns [[1,4,7], [2,5,8], [3,6,9]]

// ///
