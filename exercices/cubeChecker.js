function cubeChecker(volume, side) {
  // check for invalid
  if (volume <= 0 || side <= 0) {
    return false;
  }
  // calculate side * side * side
  const powerResult = side ** 3;

  // compare volume with side ^ 3
  if (volume === powerResult) {
    return true;
  }

  return false;
}

/*

V = L * W * H

V = 8
L = 2
8 = 2 * 2 * 2 => true

V = 8
L = 3
8 = 3 * 3 * 3 => false

*/
console.log(cubeChecker(8, 3)); // false
console.log(cubeChecker(8, 2)); // true
console.log(cubeChecker(-8, -2)); // false
console.log(cubeChecker(0, 0)); // false
console.log(cubeChecker(1, 5)); // false
console.log(cubeChecker(125, 5)); // true
