var a = [4, 3, 2, 1];
// a.sort((a, b) => b - a);
var arr = [];
var sum = 0;
var result = [];
var keep;
for (let i = 0; i < a.length; i++) {
    for (j = 0; j <= i; j++) {
        arr.push(a[j]);
    }

    keep = arr[0];
    result.push(arr[0]);
    // arr.sort((a, b) => a - b);
    console.log(arr);

    for (let k = 1; k < arr.length; k++) {
        sum = sum + ((k + 1) * arr[k]);
        console.log(sum);
    }
    result.push(sum);
    arr = [];
    sum = 0;
}

var finalResult = result.reduce((num, total) => num + total, 0);

console.log(finalResult + keep);