// const height = [167, 190, 120, 165, 137];
// function lowest(height) {
//   let min = height[0];
//   for (const number of height) {
//     if (number < min) {
//       min = number;
//     }
//   }
//   return min;
// }
// const findLowest = lowest(height);
// console.log(findLowest);

function heightest(values) {
  console.log(values);
  let max = values[0]
  for(const value of values ){
    if(value > max){
        max = value
    }
  }
  return max
}
const values = [167, 190, 120, 165, 137];
const find = heightest(values);
console.log(find);
