// problem no: 169

var majorityElement = function (nums) {
  let maxElement = null
  let maxCount = 0
  let map = {}

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1
  }

  for (key in map) {
    if (map[key] > maxCount) {
      maxCount = map[key]
      maxElement = key
    }
  }
  return maxElement
}

let nums = [3, 2, 3] // Output: 3
// let nums = [2,2,1,1,1,2,2] // Output: 2
