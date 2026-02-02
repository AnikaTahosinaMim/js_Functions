function deffirent(num1, num2) {
  console.log(num1, num2);
  if (num1 > num2) {
    console.log("num1 is big::", num1);
  } else {
    console.log("num2 is big::", num2);
  }
}
const main = deffirent(23, 20);
// console.log(main);
function check(num1, num2, num3) {
  console.log(num1, num2, num3);
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const number = check(12, 34, 91);
console.log(number);
