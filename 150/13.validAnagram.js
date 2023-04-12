// problem no: 242

// solution - 1

var isAnagram = function (s, t) {
  s = s.split('').sort()
  t = t.split('').sort()

  let obj1 = {}
  let obj2 = {}

  s.forEach((el) => (obj1[el] = (obj1[s[el]] || 0) + 1))
  t.forEach((el) => (obj2[el] = (obj2[t[el]] || 0) + 1))

  return JSON.stringify(s) === JSON.stringify(t)
}

// solutiuon - 2

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
    ? true
    : false
}

const s = 'anagram'
const t = 'nagaram'

console.log(isAnagram(s, t))
