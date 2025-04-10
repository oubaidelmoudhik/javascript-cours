function isSubstring(searchString, subString) {
  // transformer en miniscules
  const lowerSearchString = searchString.toLowerCase();
  const lowerSubString = subString.toLowerCase();

  // rechercher 'subString' avec indexOf
  //   const index = lowerSearchString.indexOf(lowerSubString);
  // if (index === -1) {
  // return false;
  // } else {
  // return true;
  // }

  // rechercher 'subString' avec includes

  const result = lowerSearchString.includes(lowerSubString);
  if (result === true) {
    return true;
  } else {
    return false;
  }
}

// je m'appele oubaid => searchString
// m'appeele => subString

// => true

// je m'appele oubaid => searchString
// M'APPELE => subString

// => true

console.log(isSubstring("je m'appele oubaid", "m'appele")); // => true
console.log(isSubstring("je m'appele oubaid", "M'APPELE")); // => true
console.log(isSubstring("je m'appele oubaid", "Casablanca")); // => false
