const menu = "javascript is fun to learn";
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
  const word = num.trim().split(/\s+/);
    if (num.trim() !== "") {
      words = word.length;
    }
  }
  // console.log(charCount);
  // return words;
  // return consonants;
  return {
    speces: charCount,
    letter: words,
    vowels: vawelsCount,
    con: consonants,
  };
}
const findMany = manyThing(menu);
console.log(findMany);
