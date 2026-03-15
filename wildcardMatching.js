/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
};

//optimized
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const m = s.length;
  const n = p.length;

  const dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") {
      dp[j] = dp[j - 1];
    }
  }

  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = false; 

    for (let j = 1; j <= n; j++) {
      const temp = dp[j];

      if (p[j - 1] === "*") {
        dp[j] = dp[j] || dp[j - 1];
      } else if (p[j - 1] === "?" || p[j - 1] === s[i - 1]) {
        dp[j] = prev;
      } else {
        dp[j] = false;
      }

      prev = temp;
    }
  }

  return dp[n];
};
