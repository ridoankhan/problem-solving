function sum() {
  if (arguments.length > 2) {
    return "Not allowed to add more than two parameters";
  } else if (arguments.length == 1) {
    return "Can not sum with only one parameter";
  }
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(sum(5, 3, 6));
