// const fibona = [0, 1];
// for (let i=2; i<=10; i++){
//   fibona[i] = fibona[i-1] + fibona[i-2];
// }
// console.log(fibona);

function fibonacci(fiboNum) {
  if (typeof fiboNum != "number"){
    return "please give a valid number";
  }
  else if (fiboNum < 2){
    return "please give a positive number";
  }
  const fibona = [0, 1];
  for (let i = 2; i < fiboNum; i++) {
    fibona[i] = fibona[i - 1] + fibona[i - 2];
  }
  return fibona;
}
let numInFibo = 14;
let result = fibonacci(numInFibo);
console.log(result);
