let alphabet = ["b", "c", "d", "e", "f", "g"];

// length of an array:
// console.log(alphabet.length);

// indexOf:
// console.log(alphabet.indexOf("b"));

// concatenation:
// console.log([1, 2, 3] + [4, 5, 6]); // NO NO!
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));

// add to array: push(), unshift():
const result = alphabet.push("h"); // adds to the end of the array
// console.log(alphabet);
// console.log(result);

alphabet.unshift("a"); // adds to the start of an array
// console.log(alphabet);

// remove from array: pop(), shift()
const removed = alphabet.pop(); // removes the last element
// console.log(alphabet);
// console.log(removed);

alphabet.shift(); // removes the first element
// console.log(alphabet);

// Add to array example:
function addToArray(location, element, arr) {
  if (location === "FRONT") {
    arr.unshift(element);
  } else if (location === "BACK") {
    arr.push(element);
  } else {
    console.log("ERROR!");
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
// console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
// console.log(testArray); // [0,1,2,3,4]

// addToArray("MIDDLE", 4, testArray); // "ERROR"
// console.log(testArray); // [0,1,2,3,4]

// ----- Array.map():

const array1 = [1, 4, 9, 16];

// returns a NEW ARRAY
const resultat = array1.map((element) => element * 2);

// console.log(resultat);
// Expected output: Array [2, 8, 18, 32]

// our map()
// let resultat2 = [];

// for (let i = 0; i < array1.length; i++) {
//   const element = array1[i];
//   resultat2.push(element * 2);
// }

// Array.forEach():
// array1.forEach((ele) => console.log(`The current number is: ${ele}`));
const arr = ["A", "B", "C", "D"];

// arr.splice(1, 2);

// arr.splice(arr.indexOf("B"), 1);

console.log(arr);
