function odd_even(num) {
  let even;
  let odd;
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd"
  }
}

const num = 88;
const finalNumber = odd_even(num);
// console.log(finalNumber);
