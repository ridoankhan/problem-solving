var s = 'zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh';
s = s.split('');
s.sort();
var str = [];

for (let i = 0; i < s.length; i = i + 2) {
    if (s[i] != s[i + 1]) {
        str.push(s[i]);
        if (s[i + 1] != undefined) {
            str.push(s[i + 1]);
        }
    }
}

str = str.join('');

if (str == '') {
    console.log('Empty String');
} else {
    console.log(str);
}
































// var hold = s;
// var str = [];

// for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i + 1]) {
//         s = s.substr(i + 2, s.length);
//         i = 0;
//         console.log(s);

//     } else {
//         str.push(s[i - 1]);
//         str.push(s[i]);
//         s = s.substr(i + 2, s.length - 1);
//         i = 0;
//     }
// }
// if (s.length % 2 == 1) {
//     str.push(hold[hold.length - 1])
// }

// if (str.length == 0) {
//     console.log('Empty String');

// }

// str.join('');
// console.log(str);