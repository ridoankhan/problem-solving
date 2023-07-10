/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=nums.length-1; i >= 0; i--) {
        let secPrevious = nums[i-2]
        if(secPrevious === nums[i]) nums.splice(i,1)
    }
};

// 
//
//
//
//
//