const https = require('https');
const {
    clear
} = require('console');

function numOfDraws() {

    var draws = 0;
    for (let i = 1; i <= 196; i++) {
        https.get(`https://jsonmock.hackerrank.com/api/football_matches?year=2011&page=${i}`, res => {

            var response = '';

            res.on('data', chunk => {
                response = response + chunk;
            });

            res.on('end', _ => {
                response = JSON.parse(response).data;

                for (let j = 0; j < response.length; j++) {
                    if (response[j].team1goals == response[j].team2goals) {
                        draws++;
                        if (draws == 516) {
                            return draws;
                        }
                    }
                }
            });
        });
    }
}

console.log(numOfDraws());