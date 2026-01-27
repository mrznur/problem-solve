/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const last = new Map();
    let l = 0;
    let final = 0;
    for (let r = 0; r < s.length; r++) {
        const curr = s[r];

        if (last.has(curr) && last.get(curr) >= l) {
            l = last.get(curr) + 1;
        }
        last.set(curr, r);
        final = Math.max(final, r - l + 1);
    }
    return final;

};

s = "abba";
console.log(lengthOfLongestSubstring(s));