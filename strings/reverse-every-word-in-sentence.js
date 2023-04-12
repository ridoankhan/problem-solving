var str = "My name is Ridoan Khan Anik";
str = str.split('');
str.unshift(' ');
str.push(' ');
var empty = [];

for (var i = 1; i < str.length; i++) {
    if (str[i] == ' ') {
        for (var j = i - 1; str[j] != ' '; j--) {
            empty.push(str[j]);
        }
        empty.push(' ');
    }
}

empty = empty.join('');
console.log(empty);