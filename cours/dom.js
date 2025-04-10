const head = document.head;
const body = document.body;

// select by tag name
const heading = document.getElementById("mainHeading");

// select by ID
const formulaire = document.getElementById("formulaire");

// select by class name
const classHeadings = document.getElementsByClassName("heading");

const lien = document.createElement("a");
lien.innerText = "Click ME!!";
lien.setAttribute("src", "google.com");
// body.appendChild(lien);

// body.removeChild(headings[1]);
// body.replaceChild(lien, headings[1]);

const div = document.getElementById("parent");
const element = document.getElementById("id1");
const premierEle = div.firstElementChild;
const dernierEle = div.lastElementChild;
const enfants = div.children;
const parent = element.parentElement;
const parentNode = element.parentNode;
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling; // null

const h1 = document.querySelector("#id1");
const headings = document.querySelectorAll("h1");

h1.innerText = "this is good";
h1.style.color = "red";
