var express = require("express")
var app = express()
var bp = require("body-parser")
var path = require("path")
var port = 8001

app.use(bp.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname + "/client")))
app.set("views", path.join(__dirname+"/client/templates"))
app.set("view engine", "ejs")


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });


app.get("/",function(req,res){
		console.log("got a /")
		Cat.find(function(err,obj){
			res.json(obj)
		})
		//res.json(Cat.find())
	})

///require (`./server/config/routes.js`)(app)

app.listen(port)
console.log("listening on port: " + port)


