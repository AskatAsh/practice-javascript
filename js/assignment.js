// problem 1: ana to vori

function anaToVori(ana){
  let vori = ana/16;
  return vori;
}
let jotoAna = 32;
let totoVori = anaToVori(jotoAna);
console.log(jotoAna + " ana to vori is : "+totoVori);


// problem 2: panda cost
function pandaCost(singara, somusa, jilapi) {
  const singaraPrice = 7;
  const somusaPrice = 10;
  const jilapiPrice = 15;
  if (singara > 0 && somusa > 0 && jilapi > 0) {
    let totalsingaraPrice = singara * singaraPrice;
    let totalsomusaPrice = somusa * somusaPrice;
    let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost =
      totalsingaraPrice + totalsomusaPrice + totaljilapiPrice;
    return totalPandaCost;
  } else if (singara > 0 && somusa > 0 && jilapi <= 0) {
    let totalsingaraPrice = singara * singaraPrice;
    let totalsomusaPrice = somusa * somusaPrice;
    // let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost = totalsingaraPrice + totalsomusaPrice;
    return totalPandaCost;
  } else if (singara > 0 && somusa <= 0 && jilapi > 0) {
    let totalsingaraPrice = singara * singaraPrice;
    // let totalsomusaPrice = somusa * somusaPrice;
    let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost = totalsingaraPrice + totaljilapiPrice;
    return totalPandaCost;
  } else if (singara <= 0 && somusa > 0 && jilapi > 0) {
    // let totalsingaraPrice = singara * singaraPrice;
    let totalsomusaPrice = somusa * somusaPrice;
    let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost = totalsomusaPrice + totaljilapiPrice;
    return totalPandaCost;
  } else if (singara > 0 && somusa <= 0 && jilapi <= 0) {
    let totalsingaraPrice = singara * singaraPrice;
    // let totalsomusaPrice = somusa * somusaPrice;
    // let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost = totalsingaraPrice;
    return totalPandaCost;
  } 
  else if (singara <= 0 && somusa > 0 && jilapi <= 0) {
    // let totalsingaraPrice = singara * singaraPrice;
    let totalsomusaPrice = somusa * somusaPrice;
    // let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost = totalsomusaPrice;
    return totalPandaCost;
  } 
  else if (singara <= 0 && somusa <= 0 && jilapi > 0){
    let totaljilapiPrice = jilapi * jilapiPrice;

    let totalPandaCost = totaljilapiPrice;
    return totalPandaCost;
  } 
  else {
    return undefined;
  }
}
let singaraNum = 0;
let somusaNum = 3;
let jilapiNum = 4;
let totalCost = pandaCost(singaraNum, somusaNum, jilapiNum);
console.log("Total panda cost is :", totalCost);




// problem 3: picnic budget
function picnicBudget(memberNum){
  // let perhead;
  const firstHundred = 100;
  const secondHundred = 100;
  let totalCost;
  if (memberNum <= 100 && memberNum > 0){
    totalCost = memberNum * 5000;
  }
  else if (memberNum >= 100 && memberNum <= 200){
    let remainder = memberNum % 100;
    totalCost = (firstHundred*5000)+(remainder*4000);
  }
  else if (memberNum >= 200){
    let remainder = memberNum % 200;
    totalCost = (firstHundred*5000)+(secondHundred*4000)+(remainder*3000)
  }
  else {
    return "No one wants to go to picnic";
  }
  return totalCost;
}
let member = -5;
let totalBudget = picnicBudget(member);
console.log("total picnic budget is :", totalBudget);




// problem 4: odd friend
function oddFriend(arr) {
  let oddName = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 != 0) {
      oddName = arr[i];
      return oddName;
    } else {
      return "there is no oddName";
    }
  }
}
let friendList = ["askat", "abdul", "aziza", "shelina", "afiaa", "begum"];
let result = oddFriend(friendList);
console.log(result);
