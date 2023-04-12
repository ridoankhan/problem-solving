function getAllSubstrings(str, size) {
    var i, j, result = [];
    size = (size || 0);
    for (i = 0; i < str.length; i++) {
        for (j = str.length; j - i >= size; j--) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

var theString = 'azerdii';
var result = getAllSubstrings(theString, 5);

result = result.filter((el) => el.length <= 5);

var word;
var count = 0;
var obj = {};

for (let i = 0; i < result.length; i++) {
    word = result[i].split("");

    for (let j = 0; j < word.length; j++) {
        if (word[j] == 'a' || word[j] == 'e' || word[j] == 'i' || word[j] == 'o' || word[j] == 'u') {
            count++;
        }
    }
    word = word.join("");
    obj[word] = count;
    count = 0;
}

var max = 0;
var final;
for (i in obj) {
    if (obj[key] > max) {
        max = obj[key];
        final = String(Object.getOwnPropertyNames(obj));
    }
}

console.log(final);