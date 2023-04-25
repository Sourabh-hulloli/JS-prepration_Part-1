//  typeof operator

// data types (primitive data types)
// data types
// String "Sourabh"
// booleans
// undefined
// null
// BigInt
// Symbol

const userName = "Sourabh";
const userId = 108;
let age = 30;
console.log(typeof userName);
console.log(typeof userId);

// convert number to string
age = 30 + "";
console.log(typeof age);

let str1 = 222;
console.log(typeof str1);
const newStr1 = toString(str1);
console.log(typeof str1);

// convert string to number
let myStr = "108";
console.log(typeof myStr);

let salary = "300000";
console.log(typeof salary); // String
// salary = Number(salary);
// console.log(typeof salary); // number
salary = parseInt(salary);
console.log(typeof salary);

// to convert string to number prefix +to the string
// Ex :
let newStr = +"1008";
console.log(newStr);
