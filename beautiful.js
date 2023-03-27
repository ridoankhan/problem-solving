
function beautifulDays(i,j,k){
  var count = 0;
  for(var index=i;index<=j;index++){
    var num = index;
    var reversed = parseInt(num.toString().split('').reverse().join(''));
    var ans = (num-reversed)%k;
    if(ans == 0){
      count++;
    }
  }
  return count;
}

var arr = [20,23,6];

var result = beautifulDays(arr[0],arr[1],arr[2]);

console.log(result);







