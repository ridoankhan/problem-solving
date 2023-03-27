var calorie = [1, 3, 2];

calorie.sort((a, b) => b - a);
var j = 0,
    sum = 0;
for (i in calorie) {
    sum += calorie[i] * Math.pow(2, j);
    j++;
}
console.log(sum)