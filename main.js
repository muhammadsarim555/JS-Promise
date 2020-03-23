function devision(a, b) {
  return new Promise((resolve, reject) => {
    if (a == 11) {
      reject("We did not expected 11");
      return;
    }
    resolve(a + b);
  });
}

devision(10, 2)
  .then(result => console.log(`Addition Output is ${result}`))
  .catch(err => console.log(err));

console.log("After function");
