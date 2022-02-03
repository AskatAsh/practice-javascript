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
console.log("Leap Year :", isLeapYear);


// Finding if an age is even or odd
function ageEvenOdd(ageNum){
  if((ageNum % 2) == 0){
    return true;
    // console.log("Age Even");
  }
  else {
    return false;
    // console.log("Age Odd");
  }
}
let age = 24;
let isEvenOdd = ageEvenOdd(age);
console.log("Given Age :", isEvenOdd);