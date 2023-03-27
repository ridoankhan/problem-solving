var num = 5;
var keep = num;
console.log(fact(num));

function fact(n) {
    keep--;
    n = n * keep;
    if (n == 1) {
        return n;
    }
    fact(n);
}