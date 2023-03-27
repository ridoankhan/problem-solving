var str1 = "aardvark";
var str2 = "apple";

var result = "";

for (let i = 0; i < str1.length; i++) {
    if (str2.search(str1[i]) >= 0) {
        result = 'Yes';
        break;
    } else {
        result = 'No';
    }
}



console.log(result);