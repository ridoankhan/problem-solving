// problem no: 125

var isPalindrome = function (s) {
  let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  return newStr.split('').reverse().join('') === newStr ? true : false
}

const s = 'A man, a plan, a canal: Panama'

console.log(isPalindrome(s))
