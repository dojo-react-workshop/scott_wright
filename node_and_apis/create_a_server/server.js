var http = require('http');
var fs = require('fs')

var server = http.createServer(function(request, response) {
  return new Promise((good, bad)=>{
    fs.readFile('index.html','utf8', (err, data) => {
      if (err) {
        bad(err)
      }
      good(data)  
    })
  }).then((data)=>{
    response.write(data)
    response.end()
  }).catch((err)=>{
    throw new Error(err.message)
  })
})
  
server.listen(8000);






