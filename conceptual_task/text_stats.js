const menu = " javascript is fun ";
function manyThing(srt) {
  let charCount = 0;
  let vawelsCount = 0;
  let consonants = 0;
  let words = 0;
  const vawels = "aeiouAEIOU";
  for (const num of srt) {
    if (num !== " ") {
      charCount++;
    }
    if ((num >= "a" && num <= "z") || (num >= "A" && num <= "Z")) {
      if (vawels.includes(num)) {
        vawelsCount++;
      } else {
        consonants++;
      }
    }
  const word = menu.trim().split(" ");
      words = word.length;
  }
  // console.log(charCount);
  // return words;
  // return consonants;
  return {
    Characters: charCount,
    Word: words,
    vowels: vawelsCount,
    con: consonants,
  };
}
const findMany = manyThing(menu);
console.log(findMany);
