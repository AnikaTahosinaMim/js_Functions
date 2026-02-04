function calcBill(prices, items) {
  //   console.log(prices, items);

  let wordCount = {};
  for (const item of items) {
    // console.log(item);
    if (wordCount.hasOwnProperty(item)) {
      wordCount[item]++;
    } else {
      wordCount[item] = 1;
    }
  }
 let total = 0;
  for (let item in wordCount) {
    let price = prices[item];
    let quentity = wordCount[item];
    let priceQuentity = price * quentity;
    total = total + priceQuentity

    // console.log(item, price, quentity);
    
  }
  
    return {
        total ,
        wordCount
    }
}
const output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output);
