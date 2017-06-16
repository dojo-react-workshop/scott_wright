var express = require(`express`),
    app = express(),
    bp = require(`body-parser`),
    path = require(`path`)

app.use(bp.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname +"/client")))
app.set(`views`, path.join(__dirname +"/client/templates"))
app.set(`view engine`, `ejs`)


require (`./server/config/routes.js`)(app)
app.listen(8000, function(){
	console.log(`listening on port 8000`)
	console.log(__dirname)
})
