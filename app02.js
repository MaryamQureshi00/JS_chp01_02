//CHAPTER 02

//Exercise 2.1
let str = 'Laurence';
console.log(str);
console.log(typeof(str));

let str2 = "Svekis";
console.log(str2);
console.log(typeof(str2));

let val1 = undefined;
console.log(val1);
console.log(typeof(val1));

let val2 = null;
console.log(val2);
console.log(typeof(val2));

let myNum = 1000;
console.log(myNum);
console.log(typeof(myNum));

//Exercise 2.2
let name = "Maryam";
let age = 17;
let iCanCodeJavaScript = true;
console.log(`Hello, my name is ${name}, i am ${age} years old and I can code JavaScript: ${iCanCodeJavaScript}`)

//Exercise 2.3

let a = prompt("Value of a");
let A = a * a;

let b = prompt("Value of b");
let B = b * b;

let c = A + B;
let C = c * c;
console.log(`Pythagorean Theorem: ${A} + ${B} = ${C}`);

//Ecercise 2.4

//Create variables for three numbers: e, f, and g.

let e = 18;
let f = 4;
let result1 = e + f;
console.log(`Add e and f = ${result1}`)

let g = 11;
let result2 = e / g ;
console.log(`Devide e and g = ${result2}`)

g = g % f;
console.log(`Modulus is ${g}`)

//Chapter Project 

//Miles-to-Kilometers converter
let mi = 200;
let km = mi * 1.609344;
console.log(`The distance of ${mi} miles is eqaual to ${km} kms`);

//BMI Calculator

// 1 inch is equal to 2.54 cm 
// 2.2046 pounds is equal to 1 Kilo

 let height = 4.9; //inches
let weight = 40; //pounds
const oneInch = 2.54;
const onePound= 0.454;

// calculate height in centimeter
const centi = height * oneInch
console.log(`${height} inches is equal to ${centi} centimeter`)

//calculate the weight in kilo
const weightKilo = weight * onePound;
console.log(`${weight} pound is equal to ${weightKilo} kilo`);

//convert height into meter
const number = 0.01;
const heightMeter = centi * number;
console.log(`${centi} centimeter is equal to ${heightMeter} meter`)

let BMI = (weightKilo) / (heightMeter * heightMeter);
console.log(`The body mass index (BMI) is ${BMI}`);