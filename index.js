// JavaScript Variables

// String:
// let prenom = "Waad";

// Number:
// let age = 19; // integer
// const Pi = 3.14; // float

// Boolean:
// let coche = true;

// let distance = 100 + 50;
// console.log(distance); // 150

// Operateurs:

// console.log(1 + 2);
// console.log(3 * 4);
// console.log(11 - 5);
// console.log(10 / 4);
// console.log(10 % 3);
// console.log(3 ** 2);

// let x = 10;
// console.log(x);

// x = 15;
// x += 3; // x = x + 3
// console.log(x);
// x *= 4; // x = x * 4
// console.log(x);
// x -= 2; // x = x - 2
// console.log(x);
// x /= 5; // x = x / 5
// console.log(x);

// Concaténation:

// let nom = "Alihssaie";

// let nomComplet = prenom + " " + nom;

// console.log(nomComplet); // Waad Alihssaie

// Operateurs de comparaison:
// let x = 5;
// let y = "5";

// let z = x == y;
//  z = x === y;
//  z = x != y;
//  z = x !== y;
// z = x >= y;
// z = x <= y;
// console.log(z);

// Operateurs logiques:

let x = true;
let y = false;
// AND '&&'
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// OR '||'
// true || false => true
// true || true => true
// false || true => true
// false || false => false

// NOT '!'
// !true => false;
// !false => true;

// (!true || false) && true => false

// Array: (tableau)

let colors = ["red", "white", "blue", "yellow", "grey", "aqua"];

// console.log(colors.length); // 6

// let arr = ["waad", 27, true, ["red", "white", "blue", "yellow"]];

// console.log(arr[3][1]); // "white"

let note = 15;

// if (note >= 10) {
//   console.log("reussi");
// } else if (note > 8) {
//   console.log("ratt");
// } else if (note > 6) {
//   console.log("passable");
// } else {
//   console.log("echoue");
// }

// let day;
// let date = new Date();
// let jour = date.getDay();

// switch (new Date().getDay()) {
//   case 0:
//     day = "Dimanche";
//     break;
//   case 1:
//     day = "Lundi";
//     break;
//   case 2:
//     day = "Mardi";
//     break;
//   case 3:
//     day = "Mercredi";
//     break;
//   case 4:
//     day = "Jeudi";
//     break;
//   case 5:
//     day = "Vendredi";
//     break;
//   case 6:
//     day = "Samedi";
//     break;
// }
// console.log(day);

// Loops (interation)
let index = 0;

// while (index < 10) {
//   console.log(index + 1);
//   index += 1;
// }

// do {
//   console.log(index);
//   index++;
// } while (index < 10); // true

/** for (initialization; condition; update) {
 * 
} */

// for (let i = 0; i < colors.length; i++) {
//   let color = colors[i];
//   console.log(color);

//   if (color === "blue") {
//     console.log("we found blue!");
//     break;
//   }
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   if (i === 6) continue;
//   console.log(i);
// }

// Functions:
function ajouterNombres(a, b, c) {
  const resultat = a + b + c; // local variable
  return resultat;
}

// const resultat = ajouterNombres(1, 3, 4); // global variable
// const resultat2 = ajouterNombres(10, 15, 2);

// console.log(resultat);
// console.log(resultat2);

function sayHello(name, birthday) {
  const message = "Hello " + name + "!";
  const age = 2024 - birthday;
  const newMessage = `Hello ${name}, your age is ${age}!`;
  return newMessage;
}

const greeting = sayHello("Waad", 1996);

// console.log(greeting);

// Arrow functions:
const sayHello2 = (name) => "Hello " + name;

// console.log(sayHello2("Adil"));

// Object:

// {property: value}
const car = {
  brand: "BMW",
  matricule: "6-A-2233",
  dateSortie: 2024,
  new: false,
  papers: ["vignette", "la visite", "assurance"],
  moteurs: {
    essance: "1.2L",
    diesel: "1.5L",
  },
  demarrer: function () {
    console.log("Vroom vroom!");
  },
  accelerer: () => {
    console.log("speed: 120km/h");
  },
};
// console.log(car.moteurs.essance);
// console.log(car);
// console.log(car["brand"]);
// console.log(car.brand);
// console.log(car.demarrer())
// ajouter propriete
car.color = "Black";

// for (let cle in car) {
//   console.log(car[cle]);
// }
