function convert(celcius) {
  const fahrenheit = celcius * (5 / 9) + 32;
  return fahrenheit;
}
const temperature = convert(98);
console.log(temperature);
