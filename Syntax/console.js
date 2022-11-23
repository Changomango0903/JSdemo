console.log(5); //Integer Type
console.log('JavaScript'); //String Type
console.log(20.49); //Number Type

//Arithmetic Operands
console.log(3.5 + 19);
console.log(2022 - 1969);
console.log(65/240);
console.log(0.2708*100);

//String Concatenation
console.log("Hello" + "World");

//Properties
console.log("Teaching the world how to code".length);

//Methods
console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace    '.trim());

//Built-in Objects
console.log(Math.floor(Math.random()*100)); //Random = random number from 0 - 1 and Floor rounds down
console.log(Math.ceil(43.8)); //Finds smallest integer that is larger than decimal number
console.log(Number.isInteger(2017)); //returns true or false depending on whether object is integer or not

//Variable (const)
var myName = 'Sean';
console.log(myName);

//Variable (dynamic)
let year = 2022;
year = 2023;
console.log(year); //Output: 2023

//Variable (const)
const name = 'Sean';
console.log(name);
//name = 'not Sean' wpi;d caise a type error

//Mathematical Assignment
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log(levelUp);
console.log(powerLevel);
console.log(multiplyMe);
console.log(quarterMe);

//Increment + Decrement
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;

//String Concatenation with Variables
let favoriteAnimal = 'cat';
console.log('My favorite animal: ' + favoriteAnimal);

//String Interpolation
let firstName = 'Sean';
console.log(`My name is ${firstName}`); //replaces items inside ${} with Variables

//typeof operator
let newVariable = 'Playing around with typeof';
console.log(typeof newVariable); //String
newVariable = 9;
console.log(typeof newVariable); //number


