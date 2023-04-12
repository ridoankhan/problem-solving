// problem no: 189

var rotate = function (nums, k) {
  k = k % nums.length // handle cases where k is greater than array length
  nums.unshift(...nums.splice(nums.length - k, k))

  return nums
}

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3

console.log(rotate(nums, k))
