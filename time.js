var inputTime = "2019-10-15T04:04:00.000Z";
inputTime = inputTime.split("T")[0];

var day = inputTime.split("-")[2];
var month = inputTime.split("-")[1];
var year = inputTime.split("-")[0];

function convertMonth(mon) {
  var mnth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return mnth[mon - 1];
}

year = year % 100;

month = convertMonth(month);

var fullDate = day + "-" + month + "-" + year;

console.log(fullDate);

