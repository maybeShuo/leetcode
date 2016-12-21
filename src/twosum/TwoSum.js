/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let tempNums = nums.map((value) => target - value);
    let first = 0;
    let second = 0;
    nums.every((item, index) => {
        second = tempNums.lastIndexOf(item);
        if (second !== -1 && second !== first)
        {
            first = index;
            return false;
        }
        return true;
    });
    return [first, second];
};

const testNums = [0,4,3,0];
const target = 0;

console.log(twoSum(testNums, target));
