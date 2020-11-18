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
                console.log("ll",item.attachments.length)
                
                item.attachments.forEach((v,i) => {
                    console.log("V ", v)
                    item._images[i] = {} 
                    var vs = v.name.split("(")
                    if (vs.length > 1) {
                        console.log("vs", vs)
                        item._images[i].where = vs[1].split(")")[0]
                        item._images[i].alt = vs[0] //v.replace(/\-/g, " ")
                    } else {
                        item._images[i].where = ""
                        item._images[i].alt = v.name //v.replace(/\-/g, " ")
                    }

                            item._images[i].url = item.attachments[i].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net')
                    // item._images[i].where = vs[1].split(")")[0]
                    // item._images[i].alt = vs[0] //v.replace(/\-/g, " ")
                })

                // var s = item.name.split("//")
                // s.forEach((v,i) => {
                //     item._images[i] = {} 
                //     var vs = v.split("(")
                //     if (vs.length > 1) {
                //         console.log("vs", vs)
                //         item._images[i].where = vs[1].split(")")[0]
                //         item._images[i].alt = vs[0] //v.replace(/\-/g, " ")
                //     } else {
                //         item._images[i].where = vs[i].split(")")[0]
                //         item._images[i].alt = v //v.replace(/\-/g, " ")
                //     }

                //     try {
                //         item._images[i].url = item.attachments[i].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net')
                //     } catch(e) {
                //         item._images[i].url = ""
                //     }
                //     //val.images[0].alt}}" data-src="{{val.attachments[0].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net') 
                // })
        })

        // https://trello-attachments.s3.amazonaws.com/56b07e4f26b8d62379a1dd42/5dcbbe49aae2ef72129dcb1a/73cf62fe23fa4ba882522ad4196c0413/_MG_5965-2.jpg
        // https://trello-attachments.s3.amazonaws.com/56b07e4f26b8d62379a1dd42/5dcbba203295772ec4d129a7/b844df0ed80fee140437058ebef4be6e/_MG_5461.jpg

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
