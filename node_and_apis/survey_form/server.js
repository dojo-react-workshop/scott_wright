console.log(`starting server.`)
//body-parser creates a req.body object
const bp = require('body-parser');

//helper to normalize folder paths
const path = require('path');

//setup express web server as app
const express = require('express');
const app = express();

//use body parser as middleware
app.use(bp.urlencoded({extended:true}))

//add http to the web server
const http = require('http').Server(app);

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

//ip package, just used to look up server's ip address
const ip = require("ip");

//port server listens to
const port = 8000;

http.listen(port, function(){
    console.log(`Server is running, URL: http://${ip.address()}:${port}`);
})

//app routing
app.get('/', function (req, res) {
  res.render('index')
})

app.post('/result',function(req,res){
    console.log(req.body);
    res.render('results', {"data": req.body})
});

app.get('/names', function (req, res) {
  res.render('nameList',{"data" : nameList})
})

app.post('/names', function (req, res) {
  //add the new name to the namelist
  console.log(req)
  if (req.body.fullName != "") {
    nameList.push(req.body.fullName)
    writer.write(req.body.fullName + '\n')
  }
  res.render('nameList', {"data" : nameList})
})

// load initial name list
const fs = require('fs')
const nameFile = "./names.txt"
let nameList = []
fs.readFile(nameFile,'utf8', (err, data) => {
  if(err) throw err;
  nameList = data.toString().split("\n");
  nameList.forEach((x,i)=>{
    if (x==''){
      nameList.splice(i,1)
    }
  })
  console.log(`read ${nameList.length} names from ${nameFile}`)
})

// open a writer for the name list for new names
const writer = fs.createWriteStream('./names.txt', {flags: 'a'})

