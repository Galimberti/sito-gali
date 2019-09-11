

const https = require('https');
const fs = require('fs');
let rawdata = fs.readFileSync('./src/trello.json');
let json = JSON.parse("["+rawdata+"]");
var i = 0 ;


json[0].lists.forEach(  ( element , key )  => {
    if  ( element.name.indexOf(".html") != -1 ){
        var list = [];
        for (let index = 0; index < json[0].cards.length; index++) {
            const c = json[0].cards[index];
            if(c.idList == element.id)
                list.push( c );
        }
        fs.writeFile("data/"+element.name.replace(".html",".json"),JSON.stringify(list ,null, 2), function(){});
    }
});







// const file = fs.createWriteStream("file.json");
// const request = https.get("https://trello.com/b/YvJJ1eb0/582-mcc-cms-foto-sito.json?key=9df4c4b9e3513069f2d5187139b8c207&token=0d7ee3d7062cc82e938e7456f37a40d055632c059e0edcbacc6cd7b5fb07905d", function(response) {
//   response.pipe(file);

// //   console.log("saved" , response);
// })





// var Trello = require("node-trello");
// var t = new Trello("9df4c4b9e3513069f2d5187139b8c207","0d7ee3d7062cc82e938e7456f37a40d055632c059e0edcbacc6cd7b5fb07905d");

// t.get("/1/boards/YvJJ1eb0/?fields=all&list_fields=all", function(data){

//     console.log( data )
// })

//   if (err) throw err;

//   var promises = [];



// //   for (const list of data.lists ) {


// //     // var p = new Promise( function (resolve, reject){
// //     //     var filename ;
// //     //     t.get("/1/list/"+list.id, function(err, data) {


// //     //         filename = data.name;
// //     //         t.get("/1/list/"+list.id+"/cards?fields=all&list_fields=all", function(err, data) {

// //     //             if (err) throw err;
// //     //             if(filename.indexOf(".html") != -1){


// //     //                 for (let i = 0; i < data.length; i++) {

// //     //                     t.get("/1/cards/"+data[i].shortLink+"/attachments/", function(err, data2) {
// //     //                         data[i].images = data2;
// //     //                         // new Promise(function (resolve, reject){
// //     //                         //     console.log("data/"+filename.replace(".html",".json"));
// //     //                         //     fs.writeFile("data/"+filename.replace(".html",".json"),JSON.stringify(data,null, 2) ,resolve );
// //     //                         // } )
// //     //                     })
                       
// //     //                 }

                    
// //     //                 //
                       
                




// //     //             }
// //     //         })
// //     //     })


       
// //     // })
// //     // promises.push(p);
// //   }



// //   t.get("/1/cards/sY21UB4U/attachments/5be17d287995da4331c79178", function(err, data) {

// //     console.log( data )

// //     // if (err) throw err;
// //     //   fs.writeFile("data/"+filename.replace(".html",".json"),JSON.stringify(data,null, 2) ,resolve )
// // })
//   Promise.all(promises).then( (data) => {
//     console.log( "finish ", data )
//   })

// })



