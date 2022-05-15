let sum = 0;
let chacker = true;
let i = 0;
let j = 1;
let temp;
while (chacker) {
  temp = j;
  j = i + j;
  i = temp;
  if (j % 2 === 0) {
    sum += j;
  }
  if (j > 4000000) {
    chacker = false;
  }
}

console.log(j);
console.log(sum);
console.log("------------------");
