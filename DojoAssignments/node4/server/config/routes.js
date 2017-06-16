
//session controller
var path = require('path'),
    session = require (path.join(__dirname + '/../controllers/session.js'))

console.log(session)

module.exports = function(app){

	app.get("/", function(req,res){
		session.logPage(req, res)
	})
	app.post("/add", function(req,res){
		session.add(req, res)

	})
}




