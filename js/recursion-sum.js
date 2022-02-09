// simple sum of numbers using for loop
// let sum = 0;
// for (let i=5; i>=0; i--){ // i>=1 works the same;
//   // console.log(i);
//   sum = sum + i;
// }
// console.log("sum =",sum);


// sum of numbers using recursion
function sum(i){
  console.log(i);
  return i + sum(i--); 
  // --i decrements the value, then evaluates and stores it.
  // i-- evaluates the value, then decrements and stores it.
}
console.log(sum(5));