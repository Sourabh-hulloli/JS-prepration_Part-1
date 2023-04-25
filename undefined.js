// undefined

let userName;
console.log(typeof userName); // undefined

userName = "Sourabh";
console.log(typeof userName); // String
// const friendname;

// null

let myVariable = null;

console.log(myVariable);
console.log(typeof myVariable);

// BigInt
let myNumber = BigInt(9383747849843307092408423728);
console.log(myNumber);

// OR we can also write BigInt in below example

let newNumber = 123n;
console.log(newNumber);

const largeNumber = 12534n;
const normalNumber = 10;

console.log(largeNumber + normalNumber); // throws error
