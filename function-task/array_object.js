// const phnones = [
//   { name: "samsung", price: 34000, camera: 50 },
//   { name: "Oppo", price: 30000, camera: 50 },
//   { name: "ZTE", price: 12650, camera: 50 },
//   { name: "redme", price: 16000, camera: 50 },
// ];
// function phnonePrice(phnones) {
//   let min = phnones[0];
// //   console.log(phnones);
//   for (const phnone of phnones) {
//     // console.log(phnone);
//     if (phnone.price < min.price) {
//       min = phnone;
//     }
//   }
//   return min;
// }
// const LowPrice = phnonePrice(phnones);
// console.log(LowPrice);
const phn = [
  { computer: "Hp", price: 36000, core: 5 },
  { computer: "Walton", price: 30000, core: 5 },
  { computer: "Acer", price: 34000, core: 5 },
  { computer: "samsung", price: 66000, core: 5 },
];
function phnPp(phn) {
  console.log(phn);
  let heightest = phn[0];
  for (const num of phn) {
    console.log(num);
    if (num.price > heightest.price) {
      heightest = num;
    }
  }
  return heightest;
}
const dam = phnPp(phn);
console.log(dam);
