// finding the largest number in an array
function arrayLargest(numbers){
  let largest = 0;
  for (let i=0; i<numbers.length; i++){
    let element = numbers[i];
    if (element>largest){
      largest = element;
    }
  }
  return largest;
}
let arrayNum = [23, 563, 63, 123, 634, 91, 124];
let result = arrayLargest(arrayNum);
console.log("largest in the array :", result);