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
console.log(otherMembers);