// problem no: 66

var plusOne = function (digits) {
  return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(Number)
}

const digits = [4, 3, 2, 1]

console.log(plusOne(digits))
