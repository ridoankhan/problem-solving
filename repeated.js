// var str = "a";
// var originalStr = str;
// var num = 100000000;
// var noOfRepeat = parseInt(num / str.length);

// noOfRepeat=noOfRepeat-1;

// var leftStr = num % (str.length);


// for(var i=1;i<noOfRepeat;i++){
//     str = str + originalStr;
// }

// str = str + originalStr;


// var holdStr = [];

// for(var i=0;i<leftStr;i++){
// holdStr[i] = originalStr.split("")[i];
// }


// var repeatedString = str + holdStr.join('');

// var aRepeatation=0;

// for(var i=0;i<repeatedString.length;i++){
//     if(repeatedString[i] == 'a')
//         aRepeatation++;
// }

// console.log(aRepeatation);

var arr=[20,10,40,30,60,50,80,70,100,90];
var swap;
for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-i-1;j++){
        if(arr[j+1]>arr[j]){
            swap=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=swap;
        }
    }
}
console.log(arr);









