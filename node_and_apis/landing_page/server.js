// localhost:6789/ -- This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas -- This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new -- This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).


var http = require('http');
var fs = require('fs')

var server = http.createServer(function(request, response) {
    switch (request.url) {
        case '/' :
            loadFile('index.html').then((data)=>response.end(data))
        break
        case '/ninjas' :
            loadFile('ninjas.html').then((data)=>response.end(data))
        break
        case '/dojos/new' :
        loadFile('dojos.html').then((data)=>response.end(data))
        case '/sync' :
        loadFile('scott.html').then((data)=>response.end(data)).catch((err)=>{throw(err)})
        break
        default :
            response.end('no page here!!!!')
    }    
})

server.listen(6789);

function loadFile(file){
    if (file == "scott.html"){
        return Promise.resolve("sync data")
    } else {
    return new Promise((good, bad)=>{
        fs.readFile(file,'utf8', (err, data) => {
            if (err) {
                bad(err)
            }
            good(data)  
            })
        })
    }
}
