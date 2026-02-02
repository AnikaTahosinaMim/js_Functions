let count = 0;
let vawels = "aeiou";
function find(word) {
  console.log(word);
  for (let i = 0;i<word.length;i++) {
    if (vawels.includes(word[i])) {
      count++;
    }
  }
  return count
}
const word = "bangladesh";
const findVawel = find(word);
console.log(findVawel);
