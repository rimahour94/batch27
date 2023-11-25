let arr = [1, 3, 4, 7, 5, 18, 6];
//         0  1  2  3  4  5   6
let arrStr = ["ritesh", "tushar", "himanshi", "hera", "aman", "kamal"];
// index     0   1  2     3        4
//  length= 5

// arr[3]; // ritesh
// arr[2]; // 4

// console.log(arr[3], arr[2]);

// map,filter,reduce,forEach,push,pop,sort,slice -- array methods

// map

// const v1 = arr.map((a) => {
//   //   if (a % 2 == 0) {
//   //     return a;
//   //   }
//   return a * a;
// });

// console.log(v1);

// forEach
// const v3 = arr.forEach((a) => {
//   //   console.log(a);
//   return a;
// });
// console.log(v3, "v3");
// filter

// const v2 = arr.filter((a) => {
//   return a % 2 == 0 && a % 3 == 0;
// });

// console.log(v2);

//  reduce

// const sum = arr.reduce((a, b) => {
//   return a + b;
// });

// console.log(sum);

// arr.push(6);
// arr.push(10);

// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);
// 0-1=-1
// -1-3=-4

// -4-7=-11
// -11-5=-16
// -16-18=-34
// -34-6=40

const sortedData = arr.sort(function (a, b) {
  return b - a;
});

console.log(sortedData);

const sliceData = arr.slice(3, 6);

console.log(sliceData);
