// function sumArray(number) {
//   let sum = 0;
//   console.log(number);
//   for (num of number) {
//     if (num % 2 === 0) {
//       //   console.log("even number", num);
//       sum = sum + num;
//     }
//   }
//   return sum;
// }

// const number = [1, 10, 34, 56,67,3,7];
// const arry = sumArray(number);
// console.log(arry);

// declare function and push in array*********
// function pusharray(number) {
//   let even = [];
//   console.log(number);
//   for (num of number) {
//     if (num % 2 === 0) {
//       even.push(num);
//     }
//   }
//   return even;
// }
// const number = [45, 48, 23, 33, 67, 44, 25, 12, 56];
// const array = pusharray(number);
// console.log("Array of even number::",array);

function simpleArray(number) {
  let even = [];
  console.log(number);
  for (nums of number) {
    if (nums % 2 === 0) {
      even.push(nums);
      console.log(nums);
    }
  }
  return even;
}
const number = [22, 23, 68, 67, 44, 33, 78, 87];
const mainArray = simpleArray(number);
console.log("Even number Minaarry = ", mainArray);
