// const nam = ["I am learning Programming to become a programmer"];
// function findString(nam) {
//   let longest = " ";
//   const words = nam[0].split(" ");
//   console.log(nam);
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest
// }
// const final = findString(nam);
// console.log(final);

function string(array) {
  console.log(array);
  let longest = " ";
  let words = array[0].split(" ");
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
  console.log(words);
}
const array = ["bangla is langueage in bangladesh"];
const findLongest = string(array);
console.log(findLongest);
