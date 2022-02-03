// converting inches to feet
function inchesToFeet(inchNum){
  var feet = inchNum/12; // here, 12 inches = 1 feet.
  return feet;
}
var inches = 150;
var toFeet = inchesToFeet(inches);
console.log(inches ,"inches to feet is :", toFeet, "ft");

// converting miles to kilometre
function milesToKilometre(mileNum){
  let kilometre = mileNum * 1.60934;
  return kilometre;
}
let miles = 14;
let toKilometre = milesToKilometre(miles);
console.log(miles, "miles to kilometre is :", toKilometre, "km");