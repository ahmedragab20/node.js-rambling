function check() {
  for (let index = 0; index <= 900000000; index++) {
    if (index + 1 === 900000000) {
      console.log("Done");
    }
  }
}

console.log(check());
console.log(
  setTimeout(() => {
    check();
  }, 0)
);
