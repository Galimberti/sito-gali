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

        lc.forEach((item,i) => {

            
                item._images = []
                var s = item.name.split("//")
                s.forEach((v,i) => {
                    item._images[i] = {} 
                    var vs = v.split("(")
                    if (vs.length > 1) {
                        item._images[i].where = vs[1].replace(")","")
                        item._images[i].alt = vs[0] //v.replace(/\-/g, " ")
                    } else {
                        item._images[i].where = null
                        item._images[i].alt = v //v.replace(/\-/g, " ")
                    }

                    
                    try {
                        item._images[i].url = item.attachments[i].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net')
                    } catch(e) {
                        item._images[i].url = ""
                    }
                    //val.images[0].alt}}" data-src="{{val.attachments[0].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net') 
                })
        })

        fs.writeFile("data/" + l.name.replace(".html",".json"), JSON.stringify(lc ,null, 2), function(){});

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
