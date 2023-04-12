
// var x=47;
    
//     if((x % 5) >= 3){
//        result= parseInt(x / 5) * 5 + 5;
//     }else{
//         result=x;
//     }
//     console.log(result);

// var str = "hacker";
// var  even;
// var odd;
// var j=0;

// for(var i=0;i<str.length;i=i+2){
//     even[j]=str[i];
//     if(str[i+1] != str.length){
//         odd[j]=str[i+1];
//     }
//     j++;
// }
// even[even.length]=" ";
// var finalStr = even.concat(odd);
// finalStr.;
// console.log(finalStr);

// var num = 169;

// var half = Math.ceil(num/2);
// var count = 0;
// for(var i=1;i<=half;i++){
//     if(num % i == 0){
//         count++;
//     }
// }

// if(count % 2 == 0){
//     console.log("YES");
// }else{
//     console.log("NO");
// }



// function factorial(n) {
//     // Complete this function
//     var result;
//     if(n >= 1){
//         return n * factorial(n-1);
//     } else
//         return 1;
// }

// console.log(factorial(6));



// var n = 524275;
// var quotient;
// var remainder = [];
// var j=0;

// while(n>=0){
//     if(n == 1){
//         remainder[j]=1;
//         break;
//     }
// remainder[j]=n%2;
// n=Math.floor(n/2);
// j++;
// }
// remainder = remainder.reverse();
// var count = 0;
// for(var k=0;k<remainder.length;k++){
//     if(remainder[k] == remainder[k+1]){
//         ++count;
//     }
// }
// count++;
// console.log(count);


// Heraldo Memelli 8135627

// var input = "Heraldo Memelli 8135627";

// var splittedString = input.split(" ");

// var name = "Name: " + splittedString[1] + ', ' + splittedString[0];

// var id = "ID: " + splittedString[2];

// console.log(name);
// console.log(id);


// var str="";
// var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"});
// indiaTime = new Date(indiaTime);
// console.log('Bangladesh time: '+indiaTime.toLocaleString());
// str  = indiaTime.toString();

// console.log(str.substring(15,24));


// var arr = [5,7,134,23,542,23,5,8];
// var highest=arr[0];
// var lowest=arr[0];

// for(var i=0;i<arr.length;i++){
//     if(arr[i]>highest)
//         highest = arr[i];

//     if(arr[i]<lowest)
//         lowest = arr[i];
    
// }
// var difference = Math.abs(highest - lowest);

// console.log(difference);

// var num=6;
// var numbers=[];
// var total=0;
// var j=0;

// for(var i=0;i<=num;i++){
//     if(num % i == 0){
//         total = total + i;
//     }
// }

// console.log(total);


// function checkPalindrome(str){

//     var reversedStr = str.split("").reverse().join("");

//     if(str == reversedStr){
//         return "palindrome";
//     }

//     return "not palindrome";
    
// }

// console.log(checkPalindrome("uiu"));



function sockMerchant(n, ar) {

    ar = ar.sort((a,b) => a-b);
    var pairs = 0;
    
    for(var i=0;i<n;i++){
        if(ar[i] == ar[i+1]){
            pairs++;
            i += 1;
        }
    }

    console.log(pairs);
}

var n = 9;
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];


sockMerchant(n,ar);