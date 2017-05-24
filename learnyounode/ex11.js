const net = require ('net')
const dateFormat = require('dateformat');
// var now = new Date();
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

const server = net.createServer((socket)=>{
    cDate = new Date()
    // YYYY-MM-DD hh:mm
    socket.end(dateFormat(cDate,"yyyy-mm-dd HH:MM")+"\n")
})

server.listen(process.argv[2])