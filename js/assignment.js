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

