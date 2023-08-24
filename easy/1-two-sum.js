// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
//
//
//
//     Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
//
// Constraints:
//
//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
// Only one valid answer exists.


// solution1: hash table
// time complexity: O(n)
// space complexity: O(n)


const twoSum = (nums, target) => {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            const complementIndex = numMap.get(complement);
            return [complementIndex, i];
        }

        numMap.set(nums[i], i);
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9))

// solution2: two pointers
// time complexity: O(nlogn)
// space complexity: O(n)

const twoSum2 = (nums, target) => {
    const sortedNums = nums.slice().sort((a, b) => a - b);

    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right];

        if (sum === target) {
            const leftIndex = nums.indexOf(sortedNums[left]);
            const rightIndex = nums.lastIndexOf(sortedNums[right]);

            return [leftIndex, rightIndex];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

console.log(twoSum2([2,7,11,15], 9))