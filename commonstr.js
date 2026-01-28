// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return "";
  }
  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const character = first[i];
    for (let j = 0; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== character) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};

strs = ["abcd","efg","ijkl"];
console.log(longestCommonPrefix(strs));