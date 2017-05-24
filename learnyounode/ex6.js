const fs = require('fs')
const my = require('./ex6_mod.js')
let path = process.argv[2]
let spec = process.argv[3]

my(path,spec,(err,data)=>{
    data.forEach((v)=>{
        console.log(v)
    })
})

