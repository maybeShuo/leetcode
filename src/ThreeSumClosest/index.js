/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    var res = nums[0] + nums[1] + nums[2];
    var diff = Math.abs(res - target);

    nums = nums.sort((a, b) => a - b);

    for (var i = 0; i < nums.length - 2; i++) {

        var temp;
        var j = i + 1, k = nums.length - 1;
        while (j < k) {
            temp = nums[i] + nums[j] + nums[k];
            if (Math.abs(temp - target) < diff) {
                res = temp;
                diff = Math.abs(temp - target);
                if (temp === target) {
                    return temp;
                }
            }
            
            if (temp > target) {
                k--;
            } else {
                j++;
            }
        }       
    }
    return res;
};