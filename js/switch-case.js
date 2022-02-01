// var color = "blue";

// if (color == "red"){
//   console.log("the selected color is red");
// }
// else if (color == "green"){
//   console.log("the selected color is green");
// }
// else if (color == "blue"){
//   console.log("the selected color is blue");
// }
// else {
//   console.log("the selected color is black");
// }
var color = "leaves";
switch(color){
  case "red":
    console.log("This is color red");
    break;
  case "leaves":
  case "green":
    console.log("This is color green");
    break;
  case "blue":
    console.log("This is color blue");
    break;
  default:
    console.log("This is color black");
}