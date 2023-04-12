const isAnagram = (word1, word2) => {
  let obj1 = {}
  let obj2 = {}

  for (let i = 0; i < word1.length; i++) {
    obj1[word1[i]] = (obj1[word1[i]] || 0) + 1
  }

  for (let i = 0; i < word2.length; i++) {
    obj2[word2[i]] = (obj2[word2[i]] || 0) + 1
  }
  console.log(obj1)
  console.log(obj2)

  if (JSON.stringify(JSON.parse(obj1)) !== JSON.stringify(JSON.parse(obj2)))
    return false

  return true
}

const word1 = 'listen'
const word2 = 'silent'

console.log(isAnagram(word1, word2))
