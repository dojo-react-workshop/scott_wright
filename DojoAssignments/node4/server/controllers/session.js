var mongoose = require('mongoose')

//point to Cat Model
var Cat = mongoose.model('Cat')
var Person = mongoose.model('Person')

function sessionController(){
	this.logPage = function(req, res){
		Cat.find({},function(err, cats){
			console.log({cats : cats})
			res.render('index', {cats : cats})
		})
	}
	this.add = function(req, res){
		var cat = new Cat(req.body)	
		cat.save()
		console.log('saved cat')
		res.redirect('/')
	}
}

module.exports = new sessionController()
