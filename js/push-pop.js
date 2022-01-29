var friendsId = [67, 99, 70, 65, 52];

var familyMembers = ["father", "mother", "sister", "brother", "nanna", "dadda"];

friendsId.push(88);
friendsId.push(76);
friendsId.push(60);

// console.log(friendsId);

familyMembers.pop();
familyMembers.pop();

familyMembers.push("uncle");
familyMembers.push("aunt");
// console.log(familyMembers);

// familyMembers.pop();
// console.log(familyMembers);
var otherMembers = familyMembers.pop();
// console.log(otherMembers);

// Remove an item from the beginning of an array
var familyAges = [23, 54, 19, 66, 12, 9, 40, 34];
// console.log(familyAges);

familyAges.shift();
console.log(familyAges); // removed 23 from the 0 position of the array

var otherAges = familyAges.shift();
console.log(otherAges);

familyAges.unshift(78, 56); // adds 78 56 at begnning of the array
console.log(familyAges);