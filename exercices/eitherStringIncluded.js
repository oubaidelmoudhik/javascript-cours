function eitherStringIncluded(sentence, word1, word2) {
  // transofmer en majuscule
  const upperSentence = sentence.toUpperCase();
  const upperWord1 = word1.toUpperCase();
  const upperWord2 = word2.toUpperCase();

  // rechercher les mots
  const result1 = upperSentence.includes(upperWord1);
  const result2 = upperSentence.includes(upperWord2);

  if (result1 || result2) {
    return true;
  } else {
    return false;
  }
}

console.log(eitherStringIncluded("je m'appele oubaid", "je", "oubaid")); // => true
console.log(eitherStringIncluded("je m'appele oubaid", "M'APPELE", "Agadir")); // => true
console.log(eitherStringIncluded("je m'appele oubaid", "Casablanca", "Tanger")); // => false
