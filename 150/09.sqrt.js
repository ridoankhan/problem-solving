// problem no: 69

var mySqrt = function (x) {
  let result = 1

  while (result * result <= x) {
    result++
  }
  return result - 1
}

const x = 8
console.log(mySqrt(x))
