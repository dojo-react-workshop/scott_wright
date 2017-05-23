const path = require('path')

//controller files
const mainController = require (path.join(__dirname + '/controllers/mainController.js'))

module.exports = function(app){
    app.get('/',function(req,res){
        console.log(`Routing request from: ${req.connection.remoteAddress} to ${req.originalUrl}`)
        mainController.index(req,res)
    });
}
