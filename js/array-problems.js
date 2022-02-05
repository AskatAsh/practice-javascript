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
function arrayMin(arrayNum) {
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
console.log(result);