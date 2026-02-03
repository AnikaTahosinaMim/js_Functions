function height(number) {
//   console.log(number);
  let max = number[0];
  for (const num of number) {
    // console.log(num);
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const number = [12, 23, 56, 78, 45, 34];
const findHeight = height(number);
console.log(findHeight)

// function long(nums) {
//   console.log(nums);
//   let min = nums[0];
//   for (const num of nums) {
//     console.log(num);
//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }
// const findLong = long([23, 1, 2, 4, 5, 13, 56, 78]);
// console.log(findLong);
