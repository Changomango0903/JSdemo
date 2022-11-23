//if-else statement
let sale = true;
sale = false;
if(sale){
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}
//Comparison operators are basically what you'd expect. < > <= >= === !==
//Logical operators are also the same && || !
//Falsy values are values which evaluate to false: 0, "", '', null, undefined, NaN

let wordCount = 0;
if (wordCount) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

let phrase = '';
if(phrase) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

//Shorthand falsy/truthy assignment
let tool = '';
tool = 'marker';
let writingUtensil = tool || 'pen'; // || operator checks left hand condition first

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary operators are shorthand if-else statements
let isLocked = false;
isLocked ? console.log('You wil need a key to open the door.') : console.log('Youw ill not need a key to open the door.');

//Else if statements
let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! the trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow');
} else {
  console.log('what the hell');
}
