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
let numFacto = 3;
let facto = 1;
for (let i=1; i <= numFacto; i++){
  // console.log(i);
  facto = facto * i;
}
console.log(numFacto+"! factorial is :", facto); // different way of concatenation