var s = "AAABBBAABB";

var deletions = 0;

var i = 0;

while (i < s.length) {
    if (s[i] == s[i + 1]) {
        s = remove(s, i + 1);
        deletions++;
        console.log(s);
    } else {
        ++i;
    }
}

function remove(str, ind) {
    str = str.substr(0, ind) + s.substr(ind + 1, s.length - 1);
    return str;
}

console.log(deletions);