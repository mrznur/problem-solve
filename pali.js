/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let half = 0;
  while (x > half) {
    const digit = x % 10;
    half = half * 10 + digit;
    x = Math.floor(x / 10);
  }
  if (x === half || x === Math.floor(half / 10)) {
    return true;
  } else {
    return false;
  }
};
