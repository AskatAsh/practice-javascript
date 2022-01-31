// var items = 45;

// function itemNumPrint(){
//   console.log("This is the number of items: "+items);
// }
// itemNumPrint(); // to execute a function it has to be called by its name

// items = items + 45;

// itemNumPrint(); // a function can be called many times

function chair(taka){ // here moneyIhave is the parameter.
  // console.log("I have 5 chair in my home");
  var chairPrice = 500;
  var chairQuantity = taka / chairPrice;
  return chairQuantity;
}

var moneyIhave = 4500;
var quantity = chair(moneyIhave);
// chair(moneyIhave);

console.log("The number of chairs I have is : " + quantity);