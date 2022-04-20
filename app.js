const fruits = ["kiwi", "mango", "banana", "orange", "peer", "apricot"];

//length - length of arr | MUTABLE | cahange length by asignment and items disappear
console.log("Array Length is: " + fruits.length);

//arr[0] - first element
console.log("First Element is: " + fruits[0]);

//arr[length -1] - last element
console.log("Last Item is " + fruits[fruits.length - 1]);

//indexOf - returns the index of something | if doesnt exist returns -1
console.log("Index of orange is: " + fruits.indexOf("orange"));
console.log("Index of Orange is: " + fruits.indexOf("Orange"));

//includes - returns true if item exists | false if not
console.log("mangoes Exist?: " + fruits.includes("mango"));
console.log("peach Exist?: " + fruits.includes("peach"));

//pop - removes last item | returns removed item
console.log("Before removing the array: " + fruits);
console.log("Last element removed is: " + fruits.pop());
console.log("Resultant array is: " + fruits);

//push - adds an item at the end of arr
console.log("Before adding item in the end: " + fruits);
console.log("New Length of the array: " + fruits.push("peach"));
console.log("Resultant Array is: " + fruits);

//shift - remove 1st item
console.log("before removing the first item: " + fruits);
console.log("Item being removed is: " + fruits.shift());
console.log("Resultant Array is: " + fruits);

//unshift - adds 1st item | $arg = item to add in 1st place
console.log("Before adding the item in the beginning: " + fruits);
console.log("New Length of the array: " + fruits.unshift("kiwi"));
console.log("Resultant Array is: " + fruits);

//concat - it doesnt mutate original array, instead need to make a new array and store it

//join - converts an array to string | $arg = separator
//split -
//String.split("") // get all chars of string in array
//slice - $arg1, $arg2 | arg2 isnt included
console.log("New Array of items between index 1 and 3: " + fruits.slice(1, 3));
console.log("While original Array is staying the same as: " + fruits);
//splice - $arg1, $arg2, $arg3 | $arg1 is index, $arg2 is how many items to remov, $arg3 is items to add | if no arg3 is provided, it removes the item at index
console.log(fruits.splice(1, 2, "peach", "pineapple"));
console.log("Mutated the fruits by replacing 2 items starting from index 1: " + fruits);

//reverse
//sort - $arg = function(a, b) {return a - b}
//sort - $arg = function(a, b) {return b - a}
//sort - $arg = function(a, b) {return a.length - b.length}
//sort - $arg = function(a, b) {return b.length - a.length}
//sort - $arg = function(a, b) {return a.toLowerCase().localeCompare(b.toLowerCase())}
//sort - $arg = function(a, b) {return b.toLowerCase().localeCompare(a.toLowerCase())}
const sortMethod = (a, b) => {
  return a - b;
};
const sortMethod2 = function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
};
const nums = [1, 12, 55, 1, 23, 2, 35, 12];
console.log(nums.sort(sortMethod));
console.log(fruits.sort(sortMethod2));
