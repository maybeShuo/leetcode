/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var area = 0;
    var start = 0;
    var end = height.length - 1;

    while(start < end) {
        var min = Math.min(height[start], height[end]);
        if (area < min * (end - start)) {
            area = min * (end - start);
        }

        if (height[start] < height[end]) {
            start++;
        } else {
            end--
        }
    }

    return area;
};

var arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var res = maxArea(arr);
console.log(res);