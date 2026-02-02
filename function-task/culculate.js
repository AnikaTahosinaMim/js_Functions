function woodCalculate(tabil, chair, bad) {
  const tabilWood = 3;
  const chaiWood = 2;
  const BadWood = 5;
  const totalTabil = tabilWood * tabil;
  const totalChair = chaiWood * chair;
  const totalBad = BadWood * bad;
  const total = totalChair + totalBad + totalTabil;
  console.log(total);
}
const perTbail = woodCalculate(3, 6, 1);
