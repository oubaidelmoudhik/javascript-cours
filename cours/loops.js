function printFives(max) {
  for (let i = 0; i <= max; i += 5) {
    console.log(i);
  }
}

// printFives(20); // 0 - 5 - 10 - 15 - 20

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    const modulo = number % i;

    if (modulo === 0) {
      return false;
    }
  }

  return true;
}

/**
 * 5
 * 5 % 2 !== 0 => true
 * 5 % 3 !== 0
 * 5 % 4 !== 0
 *
 */

// console.log(isPrime(2)); // true
// console.log(isPrime(10)); // false
// console.log(isPrime(11)); // true
// console.log(isPrime(9)); // false
// console.log(isPrime(2017)); // true
