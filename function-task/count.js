function count_zero(number) {
  let count = 0;
  for (let char of number) {
    if (char === "0") {
      count++;
    }
  }
  return count;
  console.log(number);
}
const number = "00100100";
const zero = count_zero(number);
console.log(zero);
