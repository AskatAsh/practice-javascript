// updated - finding the largest number in an array
/* function arrayMax (arrayNum){
  let max = arrayNum[0];
  for (let i=0; i<arrayNum.length; i++){
    const element = arrayNum[i];
    if(element > max){
      max = element;
    }
  }
  return max;
}
let numbers = [34, 74, 83, 28, 93, 48, 58, 68];
let result = arrayMax(numbers);
console.log(result); */


// finding the smallest element in an array
/* function arrayMin(arrayNum) {
  let min = arrayNum[0];
  for (let i = 0; i < arrayNum.length; i++) {
    const element = arrayNum[i];
    if (element < min) {
      min = element;
    }
  }
  return min;
}
let numbers = [34, 74, 83, 28, 93, 48, 58, 68];
let result = arrayMin(numbers);
console.log(result); */


// function to find even numbers in an array
function findEvenNum(){
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // let even;
  for (let i=0; i<arr.length; i++){
    if (arr[i] % 2 == 0){
      console.log(arr[i]);
    }
  }
}
// let result = findEvenNum();
// console.log(result);
console.log(findEvenNum());