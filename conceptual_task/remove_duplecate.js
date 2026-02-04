const numbers = [12, 23, 56, 12, 1, 56, 19, 12];
function duplicate(arr) {
  //   console.log(numbers);
  let newArray = [];
  for (const number of arr) {
    // console.log(number);
    if (newArray.includes(number) === false) {
      newArray.push(number);
    }
  }
  newArray.sort(function (a, b) {
    return a - b;
  });
  return newArray;
}

const remove = duplicate(numbers);
console.log(remove);
