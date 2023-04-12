// function addDigit(num) {
//     num = Number(num);
//     var sum = 0;
//     while (num > 0) {
//         sum += num / 10;
//         num /= 10;
//     }
//     if (sum > 9) {
//         sum = addDigit(sum);
//     }
//     return sum;
// }

// var digit = "55555";

// console.log(addDigit(digit));

// var num = 9007199254740991;

// console.log(num + 100000000000000000000)
// 100009007199254740000

var num = [1, 2, 3, 4];

var str = ['anik', 'mohona'];

var result = [...str, ...num];

console.log(typeof (result[1]));