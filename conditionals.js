var myMoney = 350;
var buffetPrice = 600;

// if (myMoney > buffetPrice){
//   console.log("Let's eat buffet foood....!!!")
// }

// if (buffetPrice < myMoney){
//   console.log("Onek boro restorai iccha moto khabo.")
// }
// else{
//   console.log("Alo vorta painna dail onek moja.")
// }

var outingCondition = true;
var outingPrice = 52000;
var outingTimeinHours = 45;

// if (outingCondition == true && outingPrice > 40000){
//  console.log("cholo amra ghurte jai sent martin dipe..!!!")
// }
// else{
//   console.log("cholo gramer bari beraite jai sent maritn copale nai.")
// }

// if ((outingCondition == true && outingTimeinHours < 40) || outingPrice > 56000){
//  console.log("cholo amra ghurte jai sent martin dipe..!!!")
// }
// else{
//   console.log("cholo gramer bari beraite jai sent maritn copale nai.")
// }

var outingVehicle = true;

if (outingCondition == true && outingVehicle == true){
  if(outingPrice > 51337){
    console.log("Cholo na ghure asi ojanate...!!!");
  }
  else{
    console.log("Cholo gramer bari berate jai");
  }
}
else if(outingCondition == true && outingTimeinHours > 48){
  if(outingPrice > 54337 || outingVehicle == true){
    console.log("Cholo na ghure asi ojanate...!!!");
  }
  else{
    console.log("Cholo gramer bari berate jai");
  }
}
else{
  console.log("Kothao jaoar dorkar nai ghore boshe thako");
}