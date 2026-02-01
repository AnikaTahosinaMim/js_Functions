// function num(str) {
//   const stringNum = str.length;
//   console.log(str, stringNum);
//   console.log(stringNum);
//   if (stringNum % 2 === 0) {
//     console.log("even size");
//     return true;
//   } else {
//     console.log("odd size");
//     return false;
//   }
// }
// console.log(num("khustiaa"));

// function numberDouble(number, double) {
//   if (double === true) {
//     const result = number * 2;
// console.log(result);
//     return true;
//   } else {
//     const result = number * 3;
// console.log(result);
//     return false;
//   }
// }
// numberDouble(10, true);
// console.log(numberDouble(5, true));

// array*************
// function isArray(number) {
//   const len = number.length;
//   return len;
// }
// console.log(isArray([23, 13234, 312, 4, 2, 3, 4]));
// console.log(number[23, 34, 1, 2, 4, 556, 5656436]);

// object*********************
function isObject(object) {
  const length = object.keys(object).length;
  return length;
}
isObject({ name: "num", age: 25 });
console.log(isObject({ name: "num", age: 25 }));
