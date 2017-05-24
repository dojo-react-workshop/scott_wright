const fs = require('fs')
let file = process.argv[2]
let count = 0;
let data = fs.readFile(file,"utf8",(err,data)=>{
    for (let i = 0; i<data.length; i++){
        if(data.charAt(i)=='\n')
            count++
    }
    console.log(count)
})

