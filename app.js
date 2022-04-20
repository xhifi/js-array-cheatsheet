const numsArr = [22, 12, 43, 80, 76, 26, 111, 35, 6, 75, 46];
const fruits = ["mango", "banana", "kiwi", "apricot", "pineapple"];

// fruits.length = 3;
// console.log(fruits);
// fruits.length = 5;
// console.log(fruits);
// console.log(fruits[fruits.length - 1]);

// indexOf()
// const indexFruit = fruits.indexOf("Pineapple");
// console.log(indexFruit);

// pop()
// Pop method when applied on an array removes the last element from the operated array and returns the value of the item removed.
// Array:self.pop();

console.log(fruits.length);
// const lengthOfFruits = fruits[fruits.length - 1];
// console.log(lengthOfFruits);
const popped = fruits.pop();
console.log(popped);
console.log(fruits);
// push()
const indexOfPush = fruits.push("Pineapple");
console.log(indexOfPush);
console.log(fruits);

// shift()
const valueOfShift = fruits.shift();
console.log(valueOfShift, fruits);

// unshift()
const lengthOfUnshiftedArray = fruits.unshift("Mango");
console.log(lengthOfUnshiftedArray, fruits);

// splice()
// splice method when applied on an array demands two arguments, the first argument dicates the index where you begin the operation and the second argument takes the number of items you wish to replace.
// Second argument however is optional, if it doesn't exist or is set to numeric 0, the method will instead of replacing any item, include the item at specified value in argument 1 and shift the array by that number to the right.
// Array:self.splice(Number:$arg1, Number?:arg2, Array:$arg3[""])

fruits.splice(2, 0, "Lemon");
console.log(fruits, "\n\n\n\n\n");

// sort()
const compareAscFn = (a, b) => {
  return a - b;

  // if a - b = -val | moves is backwards
  // if a - b = val | moves is forwards
  // if a - b = 0 | skip both items
};

const compareDescFn = (a, b) => {
  return b - a;
};

numsArr.sort(compareDescFn);

console.log(numsArr);

// filter()
// join()
// const JoinedArr = fruits.join("|");
// console.log(JoinedArr, fruits);
// slice()

/////////////
// concat()
// const fruits2 = ["radish", "potato", "lemon"];
// const newGreens = fruits.concat(fruits2);
// console.log(newGreens);
// console.log(fruits);

// array destrcturing

// iterator Methods:

// forEach()
// map()
// reduce()
// find()
// findIndex()
// every()
// some()
