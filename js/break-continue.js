// var i=0;
// while(i<10){
//   if (i==5)
//   break;
//   console.log(i);
//   i++;
// }

// var i=0;
// for (var i=0; i<13; i++){
//   console.log(i);
//   if (i==7)
//   break;
// }

var numbers = [23, 75, 98, 143, 97, 56, 84, 29, 59, 173, 119];
// for (var i=0; i<numbers.length; i++){
//   // console.log(numbers);
//   var num = numbers[i];
//   console.log(num);
//   if (num > 150){
//   break;
//   }
// }

for (var i=0; i<=10; i++){
  var num = numbers[i];
  if(i==4){
    continue; // here continue skiped array item 97 in position 4.
  }
  console.log(num);
}