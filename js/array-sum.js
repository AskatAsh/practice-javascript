// addition of multiple elements of an array

/* let numbers = [34, 83, 97, 123, 43, 57, 62, 83];
let sum = 0;
for (let i = 0; i<numbers.length; i++){
  const element = numbers[i];
  // let sum = 0;
  sum = sum + element;
}
console.log("addition of the array is :", sum); */

function arraySum (arrayNum){
  let sum = 0;
  for (let i=0; i<arrayNum.length; i++){
    let element = arrayNum[i];
    sum = sum + element;
  }
  return sum;  
}
let numbers = [34, 83, 97, 123, 43, 57, 62, 83];
let result = arraySum(numbers);
console.log("the addition of array is :", result);