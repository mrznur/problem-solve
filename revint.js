/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var min = -(2 ** 31);
  var max = 2 ** 31 - 1;

  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    const dig = x % 10;
    rev = rev * 10 + dig;
    x = Math.floor(x / 10);
  }
  rev *= sign;
  if (rev < min || rev > max) return 0;

  return rev;
};
x = -120;
console.log(reverse(x));
