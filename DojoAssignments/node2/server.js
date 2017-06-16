//require packages
var express = require("express"),
    path = require("path"),
    bp = require("body-parser"),
    fs = require("fs"),
    ejs = require("ejs"),
    app = {}

//initialize express app instance
app = express()

//setup body parser for incoming requests
app.use(bp.urlencoded({extended:true}))

//setup location for static content
app.use(express.static(path.join(__dirname + "/client")))

//setup location for rendered content
app.set("views",path.join(__dirname + "/client/templates"))

//setup enbedded javascript as the renderer
app.set("view engine",ejs)

require ("./server/config/routes.js")(app)

//listen on port 8000
app.listen(8000)
	console.log ("listening on port 8000")


