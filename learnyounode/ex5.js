const fs = require('fs')
let path = process.argv[2]
let spec = process.argv[3]

fs.readdir(path,(err,list)=>{
    list.forEach((fileName)=>{
        if (fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2) == spec)
            console.log(fileName)
    })
})

