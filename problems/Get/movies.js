const https = require('https');
const movies = [];
https.get('https://jsonmock.hackerrank.com/api/movies/search', res => {

    let response = '';

    res.on('data', chunk => {
        response = response + chunk;
    });


    res.on('end', _ => {
        response = JSON.parse(response).data;

        for (let i = 0; i < response.length; i++) {
            if (response[i].Year == 1995) {
                movies.push(response[i].Title);
            }
        }

        console.log(movies);
    })

});