/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var resultArr = [];
    nums = nums.sort((a, b) => a - b);

    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i - 1] === nums[i] && i > 0) {
            continue;
        }

        var target = -nums[i];
        var j = i + 1, k = nums.length - 1;
        while(j < k) {
            if (nums[j] + nums[k] === target) {
                resultArr.push([-target, nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j - 1]) {
                    j++;
                }
                while (nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (nums[j] + nums[k] > target) {
                k--;
            } else {
                j++;
            }
        }       
    }
    return resultArr;   
};