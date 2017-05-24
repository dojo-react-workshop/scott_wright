var http = require('http');
var fs = require('fs')

var server = http.createServer(function(request, response) {
  return new Promise((good, bad)=>{
    fs.readFile('index.html','utf8', (err, data) => {
      good(data)  
    })
  }).then((data)=>{
    response.write(data)
    response.end()
  }).catch((err)=>{
    throw new Error(err)
  })
})
  
server.listen(8000);






