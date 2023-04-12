var str = "We promptly judged antique ivory buckles for the next prize";
var result = "";
for (let i = 65; i <= 90; i++) {

    var smallLetter = String.fromCharCode(i);
    var capitalLetter = String.fromCharCode(i + 32)

    // console.log(smallLetter + ' ' + capitalLetter);

    var keep1 = str.search(smallLetter);
    var keep2 = str.search(capitalLetter);

    // console.log(keep1 + " " + keep2);

    if (keep1 == -1 && keep2 == -1) {
        result = "Not Panagram";
        break;
    } else {
        result = "panagram";
    }
}

console.log(result);