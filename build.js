const fs = require('fs')
const http = require('https')
const yaml = require('js-yaml')

var listsUrl =
  'https://api.trello.com/1/boards/YvJJ1eb0/lists?key=de2a945cc023e9645ffe2d0a04fb32be&token=8c815fba08256984333f3c1309cf31153819ee92ccf7ea3adaabb761c532d859'
var cardsUrl =
  'https://api.trello.com/1/boards/YvJJ1eb0/cards?attachments=true&key=de2a945cc023e9645ffe2d0a04fb32be&token=8c815fba08256984333f3c1309cf31153819ee92ccf7ea3adaabb761c532d859'

var lists

loadLists()
  .then(x => (lists = x))
  .then(loadCards)
  .then(cards => {
    lists.forEach(l => {
      var oldList = false
      if (l.name.endsWith('.html-old')) oldList = true
      else if (!l.name.endsWith('.html')) return

      var lc = cards.filter(card => {
        return card.idList == l.id
      }, {})

      lc.forEach((item, i) => {
        item._images = []
        var s = item.name.split('//')
        s.forEach((v, i) => {
          item._images[i] = {}
          var vs = v.split('(')
          if (vs.length > 1) {
            console.log('vs', vs)
            item._images[i].where = vs[1].split(')')[0]
            item._images[i].alt = vs[0] //v.replace(/\-/g, " ")
          } else {
            item._images[i].where = null
            item._images[i].alt = v //v.replace(/\-/g, " ")
          }

          try {
            item._images[i].url = item.attachments[i].url.replace(
              'https://trello-attachments.s3.amazonaws.com',
              'https://galimberti.imgix.net'
            )
          } catch (e) {
            item._images[i].url = ''
          }
          //val.images[0].alt}}" data-src="{{val.attachments[0].url.replace('https://trello-attachments.s3.amazonaws.com', 'https://galimberti.imgix.net')
        })
      })


      if (l.name == 'persone.html') {
        var dir = 'src/_persone/'
        if (!fs.existsSync(dir)) fs.mkdirSync(dir)

        lc.forEach((item, i) => {
          var p = {}
          p.tags = 'persone'
          p.id = item.id
          p.name = item.name
          p.desc = item.desc
          p.attachments = item.attachments
          let yamlStr = yaml.safeDump(p)
          fs.writeFileSync(
            dir + item.name.split(' ').join('-') + '.md',
            '---\n' + yamlStr + '\n---',
            'utf8'
          )
        })
      } else {
        if (oldList)
          fs.writeFile(
            'src/_data/' + l.name.replace('.html-old', '_old.json'),
            JSON.stringify(lc, null, 2),
            function () {}
          )
        else
          fs.writeFile(
            'src/_data/' + l.name.replace('.html', '.json'),
            JSON.stringify(lc, null, 2),
            function () {}
          )
      }
    })
  })

function loadLists () {
  return new Promise((resolve, reject) => {
    var res = ''
    http
      .get(listsUrl, function (res) {
        var body = ''

        res.on('data', function (chunk) {
          body += chunk
        })

        res.on('end', function () {
          resolve(JSON.parse(body))
          // resolve(arrayToObject(JSON.parse(body)))
        })
      })
      .on('error', function (e) {
        reject(e)
      })
  })
}

function loadCards () {
  return new Promise((resolve, reject) => {
    var res = ''
    http
      .get(cardsUrl, function (res) {
        var body = ''

        res.on('data', function (chunk) {
          body += chunk
        })

        res.on('end', function () {
          resolve(JSON.parse(body))
        })
      })
      .on('error', function (e) {
        reject(e)
      })
  })
}
