function array_odd(array) {
  let oddarray = [];
  for (num of array) {
    // console.log(num);
    if (num % 2 == 1) {
      oddarray.push(num);
    }
  }
  console.log(oddarray);
  let sum = 0;
  let len;
  let ava = 0;
  for (const number of oddarray) {
    sum = sum + number;
  }
  len = oddarray.length;
  ava = sum / len;
  return ava;
}
const array = [23, 41, 54, 21, 4, 18, 43];
const ava = array_odd(array);
console.log("sum of number avarage::",ava);
