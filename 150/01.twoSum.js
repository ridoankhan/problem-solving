// Problem no: 1

// The brute force approach
const twoSumWithBruteForce = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
};

// The optimized approach using hashMap
const twoSumReturnIndexes = (arr, target) => {
  if (arr.length === 0 || arr.length === undefined) return null;

  const complementMap = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (complementMap[complement] !== undefined) {
      return [complementMap[complement], arr[i]];
    } else {
      complementMap[arr[i]] = i;
    }
  }
  return null;
};

const twoSumReturnValues = (arr, target) => {
  if (arr.length === 0 || arr.length === undefined) return null;

  const complementMap = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (complementMap[complement] !== undefined) {
      return [complementMap[complement], arr[i]];
    } else {
      complementMap[arr[i]] = arr[i];
    }
  }
  return null;
};

const inputArr = [1, 3, 5, 7, -3, 2, 4];
console.log(twoSumReturnValues(inputArr, 0));
