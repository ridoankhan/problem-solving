let base_url = `https://jsonmock.hackerrank.com/api/countries`;

let https = require('https');

function getTotalPages(yr) {
    let url = `${base_url}?year=${yr}`;

    return new Promise((resolve, reject) => {
        https.get(url, res => {

            let response = "";

            res.on('data', chunk => {
                response += chunk;
            });

            res.on('end', _ => {

                resolve(JSON.parse(response).total_pages);
            });
        }).on('error', err => reject(err));
    })
}

function getCountriesPerPage(s, page) {
    let url = `${base_url}?year=${s}&page=${page}`;

    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let response = "";
            res.on('data', chunk => {
                response += chunk;
            })

            res.on('end', _ => {
                resolve(JSON.parse(response).data);
            });
        }).on('error', err => reject(err))
    });
}

var counter = 0;

function numOfDraws(year) {
    return getTotalPages(year).then(total_pages => {
            let current_page = 1;
            let q = [];
            while (current_page <= total_pages) {
                q.push(getCountriesPerPage(year, current_page));
                current_page++;
            }

            return Promise.all(q)
                .then(countries_pages => {
                    var dat = [];

                    for (let i = 0; i < countries_pages.length; i++) {
                        dat = dat.concat(countries_pages[i]);
                    }

                    let count = 0;

                    for (let i = 0; i < dat.length; i++) {
                        if (dat[i].team1goals === dat[i].team2goals) {
                            count++;

                        }
                    }
                    return count;

                })
                .catch(err => console.log(err));


        })
        .catch(err => console.log(err))
}


numOfDraws(2011).then(data => console.log(data));