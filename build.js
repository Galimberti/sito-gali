const fs = require('fs');
const http = require('https')
var listsUrl = "https://api.trello.com/1/boards/YvJJ1eb0/lists?key=de2a945cc023e9645ffe2d0a04fb32be&token=8c815fba08256984333f3c1309cf31153819ee92ccf7ea3adaabb761c532d859"
var cardsUrl = 'https://api.trello.com/1/boards/YvJJ1eb0/cards?attachments=true&key=de2a945cc023e9645ffe2d0a04fb32be&token=8c815fba08256984333f3c1309cf31153819ee92ccf7ea3adaabb761c532d859'

var lists
loadLists().then((x) => lists = x).then(loadCards).then((cards) => {
    lists.forEach((l) => {
        if (!l.name.endsWith(".html"))
            return

        var lc = cards.filter((card) => {
            return card.idList == l.id
        }, {})
        console.log(lc)

        fs.writeFile("data/"+l.name.replace(".html",".json"),JSON.stringify(lc ,null, 2), function(){});

    })
})

function loadLists() {
    return new Promise((resolve,reject) => {
        var res = ""
        http.get(listsUrl, function(res){
            var body = '';

            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function() {
                resolve(JSON.parse(body))
                // resolve(arrayToObject(JSON.parse(body)))
            });
        }).on('error', function(e){
            reject(e)
        });
    })
}


function loadCards() {
    return new Promise((resolve,reject) => {
        var res = ""
        http.get(cardsUrl, function(res){
            var body = '';

            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                resolve(JSON.parse(body))
            });
        }).on('error', function(e){
            reject(e)
        });
    })
}

