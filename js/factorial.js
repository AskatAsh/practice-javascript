// js multiline comment /*  */
/*
2! = 2 X 1
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
*/

// calculating factorial using for loop
// let numFacto = 3;
// let facto = 1;
// for (let i=1; i <= numFacto; i++){
//   // console.log(i);
//   facto = facto * i;
// }
// console.log(numFacto+"! factorial is :", facto); // different way of concatenation


// function to calculate factorial
// function factorial(numFacto){
//   let facto = 1;
//   for (let i=1; i<=numFacto; i++){
//     facto = facto * i;
//   }
//   return facto;
// }
// let factoValue = 5;
// let factoResult = factorial(factoValue);
// console.log(factoValue+"! factorial is : "+factoResult);

// calculating factorial using while loop
// function getFactorial(number){
//   let facto = 1;
//   let i=1;
//   while (i<=number){
//     facto = facto * i;
//     i++;
//   }
//   return facto;
// }
// let factoNum = 6;
// let factorial = getFactorial(factoNum);
// console.log(factoNum+"! factorial is : "+factorial);


// calculating factorial using decreamenting loop
function calculateFactorial(num){
  let factorial = 1;
  // let i = num;
  for (let i=num; i >= 1; i--){
    factorial = factorial * i;
  }
  return factorial;
}
let factorialNum = 6;
let getFactorial = calculateFactorial(factorialNum);
console.log(factorialNum+"! factorial is : "+getFactorial);