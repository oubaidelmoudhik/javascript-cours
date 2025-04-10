function isFive(number) {
  if (number === 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isFive(5)); // => true
console.log(isFive(3)); // => false
console.log(isFive(10)); // => false
console.log(isFive(-5)); // => false
console.log(isFive(0)); // => false
