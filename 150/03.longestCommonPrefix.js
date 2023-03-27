// problem no: 14

const longestCommonPrefix = (str) => {
  if (!str || str.length == 0) return ''

  let prefix = str[0]

  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix.length == 0) return ''
    }
  }
  return prefix
}

const input = ['flower', 'flow', 'flight'] // shoudl return 'fl'
// const input = ['dog', 'racecar', 'car'] // should return ''
console.log(longestCommonPrefix(input))
