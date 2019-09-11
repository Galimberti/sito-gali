

const https = require('https');
const fs = require('fs');
let rawdata = fs.readFileSync('./src/trello.json');
let json = JSON.parse("["+rawdata+"]");
var i = 0 ;
json[0].lists.forEach(  ( element , key )  => {
    if  ( element.name.indexOf(".html") != -1 || element.name == "PERSONE"){
        var list = [];
        for (let index = 0; index < json[0].cards.length; index++) {
            const c = json[0].cards[index];
            if(c.idList == element.id)
                list.push( c );
        }

        if(element.name == "PERSONE") {
            element.name = element.name.toLowerCase()+ ".json";
            list.reverse();
        }
        
        fs.writeFile("data/"+element.name.replace(".html",".json"),JSON.stringify(list ,null, 2), function(){});
    }
});