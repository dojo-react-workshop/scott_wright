const fs = require('fs')
const http = require('http')
let url = process.argv[2]

http.get(url,(res)=>{
    total = ""
    res.setEncoding("utf8")
    res.on('data',(data)=>{
        total+=data
    })
    res.on('end',()=>{
        console.log(total.length)
        console.log(total)
    })
})