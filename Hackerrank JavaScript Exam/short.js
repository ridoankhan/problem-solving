var https = require('https');
const { promises } = require('fs');
const { clear } = require('console');
const { resolve } = require('path');


function totalPages(yr){
    let url = `https://jsonmock.hackerrank.com/api/football_matches?year=${yr}`;

    
    return new Promise( (resolve, reject) => {
        
        let response = "";
        https.get(url, res => {

            res.on('data', chunk => {
                response = response + chunk;
            });
    
            res.on('end', _ => {
                resolve(JSON.parse(response).total_pages)
            });

        }).on('error', err => reject(err));

    })

}

function getDataPerpage(yr,pg){

    var response = "";

    return new Promise((resolve, reject) => {
        https.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${yr}&page=${pg}`, res => {

            res.on('data', chunk => {
                response = response + chunk;
            });

            res.on('end', _ => {
                resolve(JSON.parse(response).data);
            });

        }).on('error', err => reject(err));
    })
}



function numOfDraws(year){
    
    return totalPages( totalPage => {
        var allData = [];

        for(let i=1; i<=totalPage; i++){
            allData.push(getDataPerpage(year,i));
        }
    
         return Promise.all(allData).then(scatteredData => {
            var mergedData = [];
            let draws = 0;
    
            for(let i=0; i<scatteredData.length; i++){
                mergedData = mergedData.concat(scatteredData[i]);
            }
    
            for(let i=0; i < mergedData.length; i++){
                if(mergedData[i].team1goals === mergedData[i].team2goals){
                    draws++;
                }
            }
            return draws;
    
            console.log(mergedData);
        }).catch(err => console.log(err));
    });
    
}

numOfDraws(2011).then(res => console.log(res));




