function makePromise(completed) {
  return new Promise((resolve, reject) => {
    if (completed) {
      resolve("Donnée récupérée");
    } else {
      reject("Je n'ai pas pu récupérer la donnée");
    }
  });
}

const getData = makePromise(true);

// getData
//   .then((success) => console.log(success))
//   .catch((reason) => console.log(reason))
//   .finally(() => console.log("Done!"));
