function make_ava(array) {
  console.log(array);
  let ava;
  let sum = 0;
  for (let number of array) {
    sum = sum + number;
  }
  ava = sum / array.length;
//   console.log(ava);
  console.log(sum);
  return ava;
}
const array = [2, 4, 21, 34];
const finalArray = make_ava(array);
console.log(finalArray);
