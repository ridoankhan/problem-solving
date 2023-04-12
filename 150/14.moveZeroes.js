// problem no: 283

var moveZeroes = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      let j = i
      while (j !== nums.length - 1) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        j++
      }
    }
  }
}

const nums = [0, 1, 0, 3, 12]

console.log(moveZeroes(nums))
