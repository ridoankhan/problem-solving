var fetch = require('node-fetch');
const {
    timeStamp
} = require('console');

async function test() {
    var result = await fetch('https://jsonmock.hackerrank.com/api/football_matches?year=2011&page=2')
        .then(resp => {
            return resp.json();
        }).then(data => {

            return data.data;
        });
}

console.log(test().then(data => console.log(data)));







// for (let j = 1; j <= 196; j++) {
//     var page = j;


//     fetch('https://jsonmock.hackerrank.com/api/football_matches?year=2011&page=' + page)
//         .then(res => res.json())
//         .then(json => {

//             for (let i = 0; i < json.data.length; i++) {
//                 if (json.data[i].team1goals == json.data[i].team2goals) {
//                     noOfDraws++;
//                     console.log(noOfDraws)
//                 }
//             }
//         });


// }