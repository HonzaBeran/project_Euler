let primes = [];
let number = 600851475143;
for (let i = 2; i <= number; i++) {
  console.log(i);
  if (number % i == 0) {
    primes.push(i);
    number = number / i;
    i = 1;
  }
}

console.log(primes);
console.log(primes.pop());
