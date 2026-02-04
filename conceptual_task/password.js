function password(value) {
  //   console.log(value);
  const length = value.length;
  let uperCase = false;
  let number = false;
  let speach = value.includes(" ");
  let resoan = [];

  console.log(length);
  for (let i = 0; i < length; i++) {
    let character = value[i];
    // console.log(character);
    if (character >= "0" && character <= "9") {
      number = true;
    }
    if (character >= "A" && character <= "Z") {
      uperCase = true;
    }
  }
  if (speach == true) {
    resoan.push("speach found!!");
  }
  if (uperCase == false) {
    resoan.push("missing upercase");
  }
  if (number == false) {
    resoan.push("missing number");
  }
  let isValid = resoan.length == 0;
  console.log(isValid);
  //   console.log(length, uperCase, number, speach, resoan,valid);
  return {
    valid: isValid,
    resoan: resoan,
  };
}
const pass = "helloWorld2";
const checkPassword = password(pass);
console.log(checkPassword);
