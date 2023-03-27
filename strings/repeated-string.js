var s = "a";
var n = 1000000000000;


let count = (s.match(/a/g) || []).length * Math.floor(n / s.length)
let remainder = n % s.length
let remainderCount = (s.substring(0, remainder).match(/a/g) || []).length

console.log(count + remainderCount)