function multiple(quantity) {
  const frist_100 = 100;
  const scend_100 = 90;
  const third = 70;
  if (quantity <= 100) {
    const result = quantity * frist_100;
    return result;
  } else if (quantity <= 200) {
    const scendPrice = 100 * frist_100;
    const remaining = quantity - 100;
    const total_remaining = remaining * 90;
    return scendPrice + total_remaining;
  } else {
    const frist = 100 * frist_100;
    const scendPrice = 90 * scend_100;
    const reming = quantity - 200;
    const total_remain = reming * 70;
    return frist + scendPrice + total_remain;
  }
}
const layer = multiple(300);
console.log(layer);
