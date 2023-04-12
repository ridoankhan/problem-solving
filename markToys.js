var arr = [1, 2, 3, 4];
var budget = 7;
var sum = 0;
var numToys = 0;
//Sorting Array
arr.sort(function (a, b) {
  return a - b;
});

for (var i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > budget) {
    arr.pop();
  }
}

for (var i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (sum > budget) {
    break;
  } else {
    numToys++;
  }
}

console.log(numToys);
