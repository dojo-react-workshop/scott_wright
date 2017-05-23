//node server for black jack game 
console.log(`starting black jack server.`)
//body-parser creates a req.body object
const bp = require('body-parser');

//helper to normalize folder paths
const path = require('path');

//setup express web server as app
const express = require('express');
const app = express();

//use body parser as middleware
app.use(bp.urlencoded({extended:true}))

//assign static content path to web server
const staticPath = path.join(__dirname + '/public')
const bowerPath = path.join(__dirname + '/bower_components')
console.log(`static content root folder "/" is : ${staticPath}`)
console.log(`static content bower folder "/bower_compents" is: ${bowerPath}`)
app.use(express.static(staticPath));
app.use('/bower_components',  express.static(bowerPath));

//assign views path for the web server, ejs engine
const viewsPath = path.join(__dirname + '/views')
console.log(`views root folder: ${viewsPath}`)
app.set('views', viewsPath);
app.set('view engine','ejs');

//add http to the web server
const http = require('http').Server(app);

//add web sockets to the web server
const io = require('socket.io')(http);

//ip package, just used to look up server's ip address
const ip = require("ip");

//port server listens to
const port = 8000;

require('./routes.js')(app);

http.listen(port, function(){
    console.log(`Server is running, URL: http://${ip.address()}:${port}`);
})

// io.on('connection', function(socket){
//   // console.log('a user connected');
//   // socket.on('disconnect', function(){
//   //   console.log('user disconnected');
//   // });

//   socket.on('pacmanmove', function(msg){
//     console.log(`pacman  ${msg}`);
//     io.emit('pacmanmove', msg);
//   });
//   socket.on('ghostmove', function(msg){
//     console.log(`ghost  ${msg}`);
//     io.emit('ghostmove', msg);
//   });
// }); 