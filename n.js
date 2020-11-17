 
// Get document, or throw exception on error
const fs = require('fs');
const yaml = require('js-yaml');

let data = { "person" :  [{"nome": "giorgi", "cognome" : "sere"},{"nome": "giorgi", "cognome" : "sere"}] }

let yamlStr = yaml.safeDump(data);


fs.writeFileSync('data-out.yaml',"---\n"+yamlStr+"\n---", 'utf8');
