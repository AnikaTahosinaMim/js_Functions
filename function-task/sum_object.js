// const shpooing = [
//   { name: "jama", price: 3000, quentity: 4 },
//   { name: "juta", price: 3000, quentity: 2 },
//   { name: "shart", price: 3000, quentity: 3 },
//   { name: "churi", price: 500, quentity: 2 },
// ];
// function shop(shpooing) {
//   let cost = 0;
// //   console.log(shpooing);
//   for (const item of shpooing) {
//     cost = cost + item.price;
//   }
//   return cost;
// }
// const sum_of_shop = shop(shpooing);
// console.log("total price::",sum_of_shop);

const shpooing = [
  { name: "jama", price: 3000, quentity: 4 },
  { name: "juta", price: 3000, quentity: 2 },
  { name: "shart", price: 3000, quentity: 3 },
  { name: "churi", price: 500, quentity: 2 },
];
function sum(shpooing) {
  let price = 0;

  for (item of shpooing) {
    let totalPrice = item.price * item.quentity;
    price = price + totalPrice;
  }
  return price;
}
const total = sum(shpooing);
console.log(total);
