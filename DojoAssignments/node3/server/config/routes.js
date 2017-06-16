module.exports = function(app){
	var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


	var Cat = mongoose.model('Cat', { name: String });
	app.get("/",function(req,res){
		Cat.find(function(err, found){
			res.json(found)
		})
	})
}



