// for (let i=1; i<=5; i++){
//   console.log(i);
// }

function insideFunction(i){
  if(i>=6){
    return;
  }
  console.log(i);
  insideFunction(i+1);// calling function inside function ~ recursion
}
insideFunction(1);