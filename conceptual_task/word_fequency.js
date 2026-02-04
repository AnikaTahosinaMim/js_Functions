// function wordFrequency(sentence) {
//   console.log(sentence);
//   const words = sentence.split(" ");
//   let fequncyObject = {};
//   //   console.log(words);
//   for (const word of words) {
//     let converted = word.toLowerCase(word)
//     if (fequncyObject.hasOwnProperty(converted)) {
//       fequncyObject[converted]++;
//     } else {
//       fequncyObject[converted] = 1;
//     }
//   }
//   return fequncyObject;
// }
// const find = wordFrequency("I Love JS and I love coding and JS is Fun fun");
// console.log(find);

const sentence = "I love JS and I love coding and JS is fun";
function wordFrequency(variable) {
  //   console.log(variable);
  let wordString = sentence.split(" ");
  //   console.log(wordString);

  //   console.log(lowerCase);
  let checkObject = {};
  for (const word of wordString) {
    let lowerCase = word.toLowerCase(word);
    if (checkObject.hasOwnProperty(word)) {
      checkObject[lowerCase]++;
    } else {
      checkObject[lowerCase] = 1;
    }
  }
  return checkObject;
}
const Frequency = wordFrequency(sentence);
console.log(Frequency);
