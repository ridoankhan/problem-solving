a = [3, 2, 1];
var arr = a;
var numSwaps = 0;
var temp;

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      numSwaps++;
    }
  }
}

console.log(`Array is sorted in ${numSwaps} swaps`);
console.log(`First Element: ${arr[0]}`);
console.log(`Last Element: ${arr[arr.length - 1]}`);
