// const rotate = (resultArraynums, k) => {

// }

// const nums = [1, 2, 3, 4, 5, 6, 7]
// const k = 3

// console.log(rotate(nums, k))

let str = 'hello world'

// let obj = {}
// let i = 0
// while (i < str.length) {
//   obj[str[i]] = (obj[str[i]] || 0) + 1
//   i++
// }
// console.log(obj)
const obj = {}
for (let i = 0; i < str.length; i++) {
  //   if (!obj[str[i]]) {
  //     obj[str[i]] = 1
  //   } else {
  //     obj[str[i]] += 1
  //   }

  obj[str[i]] = (obj[str[i]] || 0) + 1
}

console.log(obj)
