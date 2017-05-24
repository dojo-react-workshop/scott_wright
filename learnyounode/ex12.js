const http = require ('http')
const fs = require ('fs')
const map = require('through2-map')

const server = http.createServer((req,res)=>{
   req.pipe(map((chunk)=>{
       return chunk.toString().toUpperCase()
   })).pipe(res)
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