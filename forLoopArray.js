// for loop in array

let fruits = ["apple", "banana", "mango", "kiwi", "grapes", "watermelon"];

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
console.log("--------------------------");
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log("-----------------------");

let fruitUpper = [];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
  fruitUpper.push(fruits[i].toUpperCase());
}
console.log(fruitUpper);
