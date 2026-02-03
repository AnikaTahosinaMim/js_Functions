function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divition(num1, num2) {
  return num1 / num2;
}

function culculator(a, b, oparation) {
  if (oparation === "add") {
    const result = add(a, b);
    return result;
  } else if (oparation === "subtraction") {
    const result = subtraction(a, b);
    return result;
  } else if (oparation === "multiply") {
    return multiply(a, b);
  } else if (oparation === "divition") {
    return divition(a, b);
  } else {
    return "Not possible";
  }
}
const value = culculator(5, 7, "add");
console.log(value);
