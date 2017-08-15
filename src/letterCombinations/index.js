/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var letterMaps = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var resultArr = [];
    var addLetter = function (prev, index) {
        if (digits.length === index) {
            resultArr.push(prev);
        } else {
            var indexStr = letterMaps[parseInt(digits.charAt(index))];
            if (indexStr.length > 0) {
                for (var i = 0; i < indexStr.length; i++) {
                    addLetter(prev + indexStr.charAt(i), index + 1);                   
                }
            } else {
                addLetter(prev, index + 1);
            }
        }
    };

    if (digits != '') {
        addLetter('', 0);
    }
    return resultArr;
};

var str = '23';

console.log(letterCombinations(str));