const fs = require('fs')
const http = require('http')
let url = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]

get1 = function(url){
    return new Promise((resolve,reject)=>{
        http.get(url,(res)=>{
            total = ""
            res.setEncoding("utf8")
            res.on('data',(data)=>{
                total+=data
            })
            res.on('end',()=>{
                console.log(total)
                resolve(total)
            })
        })
    })
}


get1(url)
.then(get1(url2))
.then(get1(url3))