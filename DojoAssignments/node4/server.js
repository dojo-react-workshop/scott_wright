var express = require('express'),
    bp = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    session = require('session'),
    port = 3000,
    app = express()

app.use(bp.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname + '/client')))
app.set('views', path.join(__dirname + '/client/templates'))
app.set('view engine', 'ejs')

//connect to mongo and load models
require(path.join(__dirname + '/server/config/mongo.js'))

//load web api routs
require (path.join(__dirname + '/server/config/routes.js'))(app)

app.listen(port)
console.log("listening on port: " + port)


