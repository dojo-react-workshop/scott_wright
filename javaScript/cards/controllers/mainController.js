function mainController(){
	this.index = function(req, res){
			res.render('index')
		}
	}

module.exports = new mainController()
