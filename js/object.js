var student1 = {
  name : "rahim",
  id : 1932067,
  department : "CSE",
  semester : "6th"
};

var laptop = {
  model : "hp elitebook",
  generation : "6th",
  soundSystem : "bang and olufson",
  ram : "4gb",
  hardDisk : 500,
  price : 35000,
  additional : "m.2 nvme ssd"
};
// console.log(student1);
// console.log(student1.id); // get object using property`

// console.log(laptop.soundSystem);
var laptopPrice = laptop.price;
laptop.price = 38000; //set a property of an object 1st way

laptop["hardDisk"] = "hdd 500gb"; //set a property of an object 2nd way

var laptopRam = "12gb"; //set a property of an object 3rd way
laptop["ram"] = laptopRam;
console.log(laptop);