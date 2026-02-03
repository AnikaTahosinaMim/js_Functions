//qual = 100 ---> 100

// more then 100----> 90
// more then 200 ----> 70

function discunt(value) {
  if (value <= 100) {
    const total = value * 100;
    return total;
  } else if (value <= 200) {
    const total = value * 90;
    return total;
  } else {
    const total = value * 70;
    return total;
  }
}
const item = discunt(210);
console.log(item);
