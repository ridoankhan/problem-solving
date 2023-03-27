// function anagrams(stringA, stringB) {

//     // stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//     // stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

//     return sortString(stringA) === sortString(stringB)
// }

// function sortString(string) {
//     return string.split('').sort().join('');
// }

function anagrams(stringA, stringB) {

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()


    if (stringA.length !== stringB.length) {
        return false
    }

    let arrB = stringB.split("")

    for (let char of stringA) {
        if (!arrB.includes(char)) {
            return false
            break;
        } else {
            arrB.splice(arrB.indexOf(char), 1)
        }
    }

    return true

}



var dictionary = ["heater", "cold", "clod", "reheat", "docl"];
var query = ["codl", "heater", "abcd"];
var result = [];
var count = 0;
var check;


for (let i = 0; i < query.length; i++) {
    for (j = 0; j < dictionary.length; j++) {
        if (anagrams(query[i], dictionary[j])) {
            count++;
        }
    }
    result.push(count);
    count = 0;
}

console.log(result);