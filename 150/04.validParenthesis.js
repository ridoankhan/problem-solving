// problem no: 20

const isValidWithStack = (str) => {
  let stack = []
  let openingBrackets = ['(', '{', '[']
  let closingBrackets = [')', '}', ']']

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i])
    } else if (closingBrackets.includes(str[i])) {
      let expectedBracket = openingBrackets[closingBrackets.indexOf(str[i])]
      if (stack.length === 0 || stack.pop() !== expectedBracket) {
        return false
      }
    }
  }
  return stack.length === 0
}

var isValidWithMap = function (s) {
  let stack = []
  let map = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (map[char]) {
      stack.push(map[char])
    } else if (stack.length === 0 || char !== stack.pop()) {
      return false
    }
  }

  return stack.length === 0
}

const s = '()'
// const s = "()[]{}"
// const s = "(]"

console.log(isValid(s))
