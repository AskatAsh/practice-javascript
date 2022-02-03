function findLeapYear(yearNum){
  if ((yearNum % 4) == 0){
    // console.log("Leap year!");
    return true;
  }
  else {
    // console.log("Leap year!");
    return false;
  }
}
let year = 2023;
let isLeapYear = findLeapYear(year);
console.log(isLeapYear);
