const http = require ('http')
const fs = require ('fs')
const file = process.argv[3]

const server = http.createServer((req,res)=>{
    var stream = fs.createReadStream(file)
    stream.pipe(res)
})

server.listen(process.argv[2])

// const net = require ('net')
// const dateFormat = require('dateformat');
// // var now = new Date();
// // dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

// const server = net.createServer((socket)=>{
//     cDate = new Date()
//     // YYYY-MM-DD hh:mm
//     socket.end(dateFormat(cDate,"yyyy-mm-dd HH:MM")+"\n")
// })

// server.listen(process.argv[2])