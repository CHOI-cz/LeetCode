/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    for(let i = 0; i < nums.length - 1; i++) {
        const temp = []
        for(let j = i + 1; j < nums.length; j++) {
            const dif = 0 - nums[i] - nums[j]
            if(temp[dif] !== undefined) {
                res.push([nums[i], dif, nums[j]])
            }
            temp[nums[j]] = j
        }
    }
    return res
};
// @lc code=end

