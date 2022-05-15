let biggestPalindrome = 0;
let testNumber = 0;
let testNumberStr = "";
for (let i = 100; i <= 999; i++) {
  for (let j = 100; j <= 999; j++) {
    testNumber = i * j;
    testNumberStr = testNumber + "";
    // console.log(testNumber);
    if (testPalindrome(testNumberStr) && testNumber > biggestPalindrome) {
      biggestPalindrome = testNumber;
    }
  }
}

console.log(biggestPalindrome);

function testPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
