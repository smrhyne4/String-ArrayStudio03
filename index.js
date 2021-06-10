const input = require("readline-sync");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort();
//console.log(foodCabinet);
let equipmentCabinet = equipment.split(",").sort();
//console.log(equipmentCabinet);
let petsCabinet = pets.split(",").sort();
//console.log(petsCabinet);
let sleepAidsCabinet = sleepAids.split(",").sort();
//console.log(sleepAidsCabinet);

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];

console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

let userInput = input.question("Select a cabinet between 0 and 3:");
let userInputAsNumber = Number(userInput);




//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userInputAsNumber < 0 || userInputAsNumber > 3) {
  console.log("Error!!");
} else {
  let message = `The contents: ${cargoHold[userInputAsNumber][0]}, ${cargoHold[userInputAsNumber][1]}, ${cargoHold[userInputAsNumber][2]}, ${cargoHold[userInputAsNumber][3]}`;
    console.log(message);
  } 


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”


let itemName = input.question("What item are you looking for?");

if (cargoHold[userInputAsNumber].includes(itemName) === true) {
let message = `Cabinet ${userInputAsNumber} Does contain ${itemName}`;
console.log(message);
} else {
let message = `Cabinet ${userInputAsNumber} Does not contain ${itemName}`;
  console.log(message);
}