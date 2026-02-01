function Leap_year(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
const years = Leap_year(2380);
const next_year = Leap_year(2019)
const then_year = Leap_year(2052)

console.log(years,next_year,then_year);
