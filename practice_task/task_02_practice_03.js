const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
  //   console.log(phones);
  let sum = 0;
  let ava;
  for (const phn of phones) {
    sum = sum + phn.price;
  }
  console.log(sum);
  ava = sum / phones.length;
  return ava;
}
const findPrice = findAveragePhonePrice(phones);
console.log(findPrice);
