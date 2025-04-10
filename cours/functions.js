function averageOfTwo(num1, num2) {
  return (num1 + num2) / 2;
}

// console.log(averageOfTwo(7, 9)); // 8
// console.log(averageOfTwo(8.5, 8)); // 8.25
// console.log(averageOfTwo(25, 99)); // 62
// console.log(averageOfTwo(-15, -20)); // -17.5

function average(a, b, c, d) {
  return (a + b + c + d) / 4;
}

// console.log(average(8, 8, 25, 62, -17.5));

// -- Callback functions:
function divideByTwo(sum) {
  return sum / 2;
}
function avg(a, b, callback) {
  const somme = a + b;
  const resultat = callback(somme);
  return resultat;
}

// console.log(avg(10, 8, divideByTwo));
