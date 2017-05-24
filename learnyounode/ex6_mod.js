const fs = require('fs')

module.exports = function(path, spec, cb){
let filtered = []
fs.readdir(path,(err,list)=>{
    if (err) return cb(err)
    list.forEach((fileName)=>{
        if (fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2) == spec)
            filtered.push(fileName)
    })
    cb(err,filtered)
})
}