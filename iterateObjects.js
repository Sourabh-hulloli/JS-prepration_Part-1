// how to iterate object

const person = {
  name: "Sourabh",
  age: 30,
  "person hobbies": ["swimming", "treckking", "bike riding"],
};

// for in loop
// Object.keys

// for (let key in person) {
//   console.log(`${key} :`, person[key]);
//   //   console.log(`${key} :`, `${person[key]}`);
// }

// console.log(typeof Object.keys(person));
// console.log(Array.isArray(Object.keys(person))); // true

for (let key of Object.keys(person)) {
  console.log(person[key]);
}
