function union(setA, setB) {
    let _union = new Set(setA);
    for (elem of setB) {
        _union.add(elem);
    }
    return _union;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (elem of setA) {
        if (setB.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function difference(setA, setB) {
    let _difference = new Set(setA);
    for (elem of setA) {
        if (setB.has(elem)) {
            _difference.delete(elem);
        }
    }
    return _difference;
}

var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
var setC = new Set([3, 4, 5, 6]);


console.log(...union(setA, setC)); // => Set [1, 2, 3, 4, 5, 6]
console.log(...intersection(setA, setC)); // => Set [3, 4]
console.log(...difference(setA, setC)); // => Set [1, 2]