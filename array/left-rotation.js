var arr = [1, 2, 3, 4, 5];

var hold;

for (let i = 0; i < 4; i++) {
    hold = arr.shift();
    arr.push(hold);
}
arr = arr.join(' ');

console.log(arr);