const num = -28;
const numAbsolute = Math.abs(num); // Math.abs returns the absolute value of a number
// console.log("The absolute value of "+num+" is: "+numAbsolute);


let newNum = 23.3351;
let ceiling = Math.ceil(newNum);
// console.log("The ceiling value of "+newNum+" is: "+ceiling);


let againNum = 23.5951;
let flooring = Math.floor(againNum);
// console.log("The floor value of "+againNum+" is: "+flooring);

let rounding = Math.round(againNum);
console.log("The rounded value of "+againNum+" is: "+rounding);

let randoNum = Math.random(); // return random numbers from 0 to 1
// console.log("random value: ", randoNum);

let randoming = Math.random()*6; // return random numbers from 0 to 6
// console.log("random value from 0 to 6: ",randoming);
// console.log("random value from 0 to 6: ",Math.round(randoming)); // rounding the random numbers


for (let i = 0; i<=15; i++){
  let randomNumber = Math.random()*6;
  console.log("random value from 0 to 6: ",Math.ceil(randomNumber));
}