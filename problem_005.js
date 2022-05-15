function isDivisible(num) {
  for (let i = 2; i <= 20; i++) {
    if (num % i != 0) {
      return false;
    }
  }
  return true;
}

(function smallestNum() {
  let chacker = true;
  let i = 1;
  while (chacker) {
    if (isDivisible(i)) {
      console.log(i);
      return i;
    }
    i++;
  }
})();
