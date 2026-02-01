function evenOdd(number) {
//   console.log(number);
  let result ;
  if(number%2==1){
    result = number*2
  }
//   console.log(result);
  else if(number%2===0){
    result = number/2
  }
//   console.log(result)
  return result
}
const number = 18;
const finalEvenOdd = evenOdd(number);
console.log(finalEvenOdd);
