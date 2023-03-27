var s = 'SOSSOSSOS';

var changes = 0;

for (let i = 0; i < s.length; i += 3) {
    if (s[i] != 'S') {
        changes++;
    }
    if (s[i + 1] != 'O') {
        changes++;
    }
    if (s[i + 2] != 'S') {
        changes++;
    }
}

console.log(changes);