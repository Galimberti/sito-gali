const fs = require('fs');
const http = require('https')
var listsUrl = "https://api.trello.com/1/boards/YvJJ1eb0/lists?key=de2a945cc023e9645ffe2d0a04fb32be&token=8c815fba08256984333f3c1309cf31153819ee92ccf7ea3adaabb761c532d859"
var cardsUrl = 'https://api.trello.com/1/boards/YvJJ1eb0/cards?attachments=true&key=de2a945cc023e9645ffe2d0a04fb32be&token=8c815fba08256984333f3c1309cf31153819ee92ccf7ea3adaabb761c532d859'

var lists


loadLists().then((x) => lists = x).then(loadCards).then((cards) => {
    lists.forEach((l) => {
        var oldList = false
        if (l.name.endsWith(".html-old"))
            oldList = true
        else if (!l.name.endsWith(".html"))
            return
        
        var lc = cards.filter((card) => {
            return card.idList == l.id
        }, {})

        lc.forEach((item,i) => {

                item._images = []
                
                item.attachments.forEach((v,i) => {
                    item._images[i] = {} 
                    var vs = v.name.split("(")
                    if (vs.length > 1) {
                        item._images[i].where = vs[1].split(")")[0]
                        item._images[i].alt = vs[0] //v.replace(/\-/g, " ")
                    } else {
                        item._images[i].where = ""
                        item._images[i].alt = v.name //v.replace(/\-/g, " ")
                    }

                    item._images[i].url = item.attachments[i].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net')
                })
        })

        if (oldList)
            fs.writeFile("data/" + l.name.replace(".html-old","_old.json"), JSON.stringify(lc ,null, 2), function(){})
        else
            fs.writeFile("data/" + l.name.replace(".html",".json"), JSON.stringify(lc ,null, 2), function(){})

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
