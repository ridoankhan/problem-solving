/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maxElement = null
    let maxCount = 0
    let map = {}

    for(let num of nums) {
        map[num] = (map[num] || 0) + 1
    }

    for(key in map) {
        if(map[key] > maxCount) {
            maxCount = map[key]
            maxElement = key
        }
    }
    return maxElement
};