// problem no: 217

// solution-1

var containsDuplicate1 = function (nums) {
  let repeatance = 0
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true
    }
  }
  return false
}

// solution-2

var containsDuplicate2 = function (nums) {
  const set = new Set(nums)

  if (set.size < nums.length) {
    return true
  } else {
    return false
  }
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.log(containsDuplicate1(nums))
