let first = 34;
let second = 78;
console.log(first, second);

// swapping two variables
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second); // swap using tamporary variables

// swapping without temp - destructuring
[first, second] = [second, first]; // destructuring array;
console.log(first, second);

