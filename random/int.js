var containsDuplicate = function (obj) {
    const set = new Set(obj);

    return set;
    if (set.size < nums.length) {
        return true
    } else {
        return false;
    }
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var obj = {
    name: 'Anik',
    age: 28
}

console.log(containsDuplicate(obj));