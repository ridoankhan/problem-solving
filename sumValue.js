const sumOfNumbers = (arr, target) => {
    var sum = 0;
    var result = [];

    for (let i = 0; i < arr.length; i++) {
        let startingPoint = i;

        for (let j = startingPoint; j < arr.length; j++) {
            sum = sum + arr[j];
            result.push(arr[j]);
            if (sum == target) {
                return result;
            } else if (sum > target) {
                break;
            }
        }
        sum = 0;
        result = [];
    }
}

var trgt = 7;
var inputArr = [8, 2, 3, 2, 6, 4];

console.log(sumOfNumbers(inputArr, trgt))