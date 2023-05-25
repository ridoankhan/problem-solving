/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueArray = [...new Set(nums)]

    return nums.length === uniqueArray.length ? false : true
};