/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let start = 0;
    let end = 0;
    let strSet = new Set();

    while (start < s.length && end < s.length)
    {
        if (strSet.has(s.charAt(end)))
        {
            strSet.delete(s.charAt(start));
            start++;
        }
        else
        {
            strSet.add(s.charAt(end));
            end++;
            ans = Math.max(ans, end - start);

        }
    }
    return ans;
};

var s = "pwwkew";
lengthOfLongestSubstring(s);
