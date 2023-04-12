var arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
var store = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        store.push(Math.abs(arr[i] - arr[j]));
    }
}

store = store.filter(num => num > 0);
console.log(Math.min(...store));