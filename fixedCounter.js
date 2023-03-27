function getFixedCounter(k) {
    // write your code here
    const counter = (function counter() {
        let value = 0;
        return {
            getValue: function () {
                return value;
            },
            increment: function (k) {
                value += k;
            },
            decrement: function (k) {
                value -= k;
            }
        }
    })();

}

var val = 1;
getFixedCounter(val);