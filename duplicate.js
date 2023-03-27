var arr = [5,10,15,20,5,15,30,40,50,60,20,30,5,15,20,30];
var duplicate = [];
var count;

for(var i=0;i<arr.length;i++){
  count=0;
  for(var j=0;j<arr.length;j++){
    if(arr[i] == arr[j]){
      count++;
      if (count > 1) {
        duplicate.push(arr[i]);

        var filtered = arr.filter(function (element) {
          return element !== arr[i];
        });
        arr = filtered;
      }
    }

  }
}

console.log(duplicate);