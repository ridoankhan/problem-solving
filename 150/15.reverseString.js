// problem no: 344

const reverse = (s) => {
  let len = Math.floor(s.length / 2)
  let j = s.length - 1

  for (let i = 0; i < len; i++) {
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
    j--
  }
  return s
}

const s = ['h', 'e', 'l', 'l', 'o']
console.log(reverse(s))
