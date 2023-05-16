function hide(){
    // var arr = new Array(2); 
  
console.log("Creating 2D array"+"\n"); 
  
// Loop to create 2D array using 1D array 
// for (var i = 0; i < arr.length; i++) { 
//     arr[i] = new Array(2); 
// } 

const arr = new Array(5).fill(0).map(() => new Array(4).fill(0));
  
// Loop to initilize 2D array elements. 
arr[0][0] = "first row and first column";
arr[0][1]="first row and second column";
arr[1][0] = "second row and first column";
arr[1][1] = "second row and second column";
  
// To Get all the values of a specific column in a 2D array
var col2 = arr.map(function(value,index) { return value[1]; });

for(var row=0; row<arr.length;row++){
    for(var col=0;col<arr[row].length;col++){
        console.log(arr[row][col]);
    }
}
}

function rotateLeft(a,d){
    for(rotation=1;rotation<=d;rotation++){
    
        var firstElement = a[0];
    
        for(var i=0;i<a.length-1;i++){
            a[i]=a[i+1];
        }
        a[a.length-1] = firstElement;
    }
    return a;
}

var arr = [1,2,3,4,5];
var d=4;





console.log(rotateLeft(arr,d));



