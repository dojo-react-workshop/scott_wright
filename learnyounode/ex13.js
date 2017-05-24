const http = require ('http')
const fs = require ('fs')
const map = require('through2-map')
const url = require('url')

const server = http.createServer((req,res)=>{
    let data = url.parse(req.url)
    if (data.pathname == "/api/parsetime"){
        let myDate = new Date(data.query.toString().substr(4))
        res.end(JSON.stringify({"hour": myDate.getHours(),
         "minute": myDate.getMinutes(),
         "second": myDate.getSeconds()
        }))
    }
    if (data.pathname == "/api/unixtime"){
         let myDate = new Date(data.query.toString().substr(4))
        res.end(JSON.stringify({"unixtime": myDate.getTime()}))
    }
})

server.listen(process.argv[2])

