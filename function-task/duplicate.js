// const do_duplicate = [
//   "abul",
//   "kabul",
//   "babul",
//   "abul",
//   "dabul",
//   "sabul",
//   "babul",
//   "nabul",
//   "dabul",
// ];
// function duplicate(array) {
//   let findArray = [];
//   for (item of array) {
//     if (findArray.includes(item) === false) {
//       findArray.push(item);
//     }
//   }
//   return findArray;
// }
// const find_duplicate = duplicate(do_duplicate);
// console.log(find_duplicate);

// const menu = [12, 34, 1, 3, 56, 2, 2, 34, 12, 3, 56, 1, 10];
// function find_number(numers) {
//   console.log(numers);
//   let arr = [];
//   for (num of numers) {
//     if (arr.includes(num) === false) {
//       arr.push(num);
//     }
//   }
//   arr.sort(function (a, b) {
//     return a - b;
//   });

//   return arr;
// }
// const find = find_number(menu);
// console.log(find);

function findArray(menu) {
  console.log(menu);
  let nameArray = [];
  for (const nam of menu) {
    if (nameArray.includes(nam) === false) {
      nameArray.push(nam);
    }
  }

  return nameArray;
}
const menu = [
  "mim",
  "anika",
  "dim",
  "chunu",
  "ahsan",
  "dim",
  "chunu",
  "hamim",
  "habib",
  "tahosina",
];
const finaArray = findArray(menu);
