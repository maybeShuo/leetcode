/**
 * @param {string} s
 * @return {string}
 */

var lo = 0, maxLen = 0;
var longestPalindrome = function(s) {
    var len = s.length;
    
    if (len < 2) {
        return s;
    }
    for (var i = 0; i < s.length - 1; i++) {
        extendPalindrome(s, i, i);
        extendPalindrome(s, i, i + 1);
    }

    return s.substring(lo, lo + maxLen);
};

var extendPalindrome = function(str, j, k) {
    while(j >= 0 && k <= str.length && str[j] === str[k]) {
        j--;
        k++;
    }
    if (maxLen < k - j - 1) {
        lo = j + 1;
        maxLen = k - j - 1;
    }
};

var input = "babad";

var Output = "bab";

var res = longestPalindrome("cbbd");

console.log(res);