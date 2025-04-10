const iPhone = {
  marque: "Apple",
  couleur: "noir",
  prix: 1500,
  stock: 200,
  ref: "iPhone 13",
};

function Telephone(m, c, p, s, r) {
  this.marque = m;
  this.couleur = c;
  this.prix = p;
  this.stock = s;
  this.ref = r;
  this.verifierStock = function () {
    if (this.stock > 0) {
      return true;
    } else {
      return false;
    }
  };
}

const samsung = new Telephone("samsung", "rouge", 1000, 150, "GalaxyS25");

samsung.serie = "S25";
samsung.prix = 850;
// console.log(samsung);

// for (key in samsung) {
//   console.log(key + ": " + samsung[key]);
// }

// delete samsung.couleur;

// JSON

const jsonData = '{"nom":"Saidi", "prenom":"Ali"}';

console.log(typeof jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);

const iphoneJSON = JSON.stringify(iPhone);

console.log(iphoneJSON);
