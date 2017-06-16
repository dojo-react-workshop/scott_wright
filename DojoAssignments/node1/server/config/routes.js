module.exports = function(app){
	app.get(`/`, function(req, res){
		console.log(req.body)
		res.render(`index`)
	})
	app.get(`/cat/:game/:id`, function(req, res){
		console.log(req.body)
		res.json(req.params)
	})
	app.post(`/results`, function(req, res){
		console.log(req.body)
		res.json(req.body)
	})
} 
