// finding the biggest number of three values

// let firstNum = 743;
// let secondNum = 833;
// let thirdNum = 593;

/* if (firstNum>secondNum && firstNum>thirdNum){
  console.log("the first number is bigger:",firstNum);
}
else if (secondNum>firstNum && secondNum>thirdNum){
  console.log("the second number is bigger:",secondNum);
}
else {
  console.log("the third number is bigger:",thirdNum);
} */

// finding biggest number using math
// let maxNum = Math.max(firstNum, secondNum, thirdNum);
// console.log(maxNum+" is the biggest of the three numbers");

function findMax(num1, num2, num3){
  let maxNum = Math.max(num1, num2, num3);
  return maxNum;
}
let firstNumber = 235;
let secondNumber = 836;
let thirdNumber = 976;
// let biggest = findMax(firstNumber, secondNumber, thirdNumber);
// console.log(biggest, "is the biggest of the three value");

function findMin(numOne, numTwo, numThree){
  let minNum = Math.min(numOne, numTwo, numThree);
  return minNum;
}
let smallest = findMin(firstNumber, secondNumber, thirdNumber);
console.log(smallest, "is the smallest of the three value");