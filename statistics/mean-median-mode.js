// var input = [64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060];

// const mean = (input) => {
//   var sum = 0;
//   for (var i = 0; i < input.length; i++) {
//     sum = sum + input[i];
//   }

//   return sum / input.length;
// }

const median = (...input) => {

    input.sort(function (a, b) {
        return a - b
    });

    if (input.length % 2 == 0) {
        return (input[input.length / 2] + input[(input.length / 2) - 1]) / 2;
    } else {
        var ind = Math.floor(input.length / 2);
        return input[ind];
    }
}


// const mode = (numbers) => {

//   var modes = [],
//     count = [],
//     i, number, maxIndex = 0;

//   for (i = 0; i < numbers.length; i += 1) {
//     number = numbers[i];
//     count[number] = (count[number] || 0) + 1;
//     if (count[number] > maxIndex) {
//       maxIndex = count[number];
//     }
//   }

//   for (i in count)
//     if (count.hasOwnProperty(i)) {
//       if (count[i] === maxIndex) {
//         modes.push(Number(i));
//       }
//     }

//   return modes;
// }

// // const mode = (input) => {

// //   var list = input;
// //   var counts = {}
// //   list.forEach(function (e) {
// //     if (counts[e] === undefined) {
// //       counts[e] = 0
// //     }
// //     counts[e] += 1
// //   });

// //   // var obj = counts;
// //   // return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);


// //   var obj = counts;
// //   for (var key in obj) {
// //     if (obj[key] > 1) {
// //       return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
// //     } else {
// //       input.sort(function (a, b) {
// //         return a - b
// //       });
// //       return input[0];
// //     }

// //   }


// // }

// console.log(mean(input) + '\n');
// console.log(median(input) + '\n');
// console.log(mode(input) + '\n');

var input = '64630 11735 14216 99233 14470 4978 73429 38120 51135 67060';

input = input.split(' ');

console.log(input[2]);