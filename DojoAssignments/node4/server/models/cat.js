var mongoose = require('mongoose')
var Schema = mongoose.Schema
var CatSchema = new Schema({
	f_name:String,
	l_name:String
})

mongoose.model('Cat', CatSchema)