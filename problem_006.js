function sumSquared(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i ** 2;
  }
  return sum;
}

function squaredSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum ** 2;
}

// console.log(sumSquared(100));

console.log(squaredSum(100) - sumSquared(100));
