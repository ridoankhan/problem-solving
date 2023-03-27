var n = 12;
var seed1 = 0;
var seed2 = 1;
var fibo = [];
var keep;

fibo.push(seed1);
fibo.push(seed2);

for (let i = 0; i < n; i++) {
    keep = seed1 + seed2;
    fibo.push(keep);
    seed1 = seed2;
    seed2 = keep;
}

console.log(fibo[n]);