// function validation(number1, number2) {
//   const result = number1 * number2;
//   if (typeof number1 !== "number" || typeof number2 !== "number") {
//     return "Please Enter number:";
//   }
//   return result;
// }
// const result = validation("seven", 5);
// console.log(result);

// function fulName(name1, name2) {

//   if (typeof name2 !== "string" || typeof name1 !== "string") {
//    return "Plese enter any name:"
//   }
//   const full = name1 + " " + name2;
//   return full;
// }
// const full = fulName("anika", "Ahsan");
// console.log(full);

// function object(value) {
//   if (typeof value !== "object") {
//     return "Plese Enter Object";
//   }
//   const item = value.price;
//   console.log(item);
//   return item;
// }
// const final = object({ name: "phone", price: 30 });
// const final = object(8)
// console.log(final);

function array(value) {
  if (Array.isArray(value) === false) {
    return "please enter an array";
  }
  const item = value[1];
  return item;
}
const mainArray = array([12,34,56]);
console.log(mainArray);
