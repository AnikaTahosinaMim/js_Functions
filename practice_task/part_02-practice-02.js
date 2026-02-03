// function upercase(value) {
//   let uper = value[0];
//   for (num of value) {
//     // console.log(num);
//     if (num.length > uper.length) {
//       uper = num;
//     }
//   }
//   return uper;
// }
// const value = ["mim", "anika", "tahosina", "ahsan"];
// const findUperCase = upercase(value);
// console.log(findUperCase);

function findLower(values) {
  let low = values[0];
  for (const value of values) {
    if (value.length < low.length) {
      low = value;
    }
  }
  return low;
}
const values = ["rahim", "robin", "rafi", "ron", "rashed"];
const lowest = findLower(values);
console.log(lowest);
