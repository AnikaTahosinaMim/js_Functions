function odd_ava(numbers) {
  let sum = 0;
  let count = 0;
  for (number of numbers) {
    if (number % 2 === 1) {
      sum = sum + number;
      count++;
    }
  }
  console.log(sum);
  let ava = sum / count;
  return ava;
}
const numbers = [21, 34, 54, 91, 89, 7, 72, 10];
const odd = odd_ava(numbers);
console.log(odd);
