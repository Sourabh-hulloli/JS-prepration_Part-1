// use const for creating array

// array is a object, objects are stored in heap memory

const fruits = ["apple", "mango", "garpes"];
fruits.push("banana");
console.log(fruits);

// while loop

let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

let j = 0;
const newFruits = [];

do {
  newFruits.push(fruits[j].toUpperCase());
  j++;
} while (j < fruits.length);
console.log(newFruits);
