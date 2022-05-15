const isPrime = (testNum) => {
  for (let i = 2; i < testNum; i++) {
    if (testNum % i == 0) {
      return false;
    }
  }
  return true;
};

const findPrimes = (position) => {
  let primeArr = [];
  let i = 2;
  while (primeArr.length !== position) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
    i++;
  }
  console.log(primeArr.pop());
};

findPrimes(10001);
