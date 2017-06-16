var mongoose = require('mongoose')
var path = require('path')
var fs = require('fs')
var models_path = path.join(__dirname + '/../models')

mongoose.connect('mongodb://localhost/nwdb')

console.log('loading models from: ' + models_path)
fs.readdirSync(models_path).forEach(function(file){
	if(!file.indexOf('.js')==0){
		console.log('---> loading: ' + path.join(models_path + '/' + file))
		require(path.join(models_path + '/' + file))
	}
})
console.log('models loaded.')