const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function playThim(employees) {
  let year;
  let selary;
  let total = 0;
  for (const num of employees) {
    year = num.experience * num.increment;
    selary = year + num.starting;
    total = total + selary;
  }
  console.log(year);
  return total;
}
const giveher = playThim(employees);
console.log(giveher);
