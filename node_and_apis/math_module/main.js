fs = require('fs')
math = require('./math.js')

console.log(math.sum(2,3))
console.log(math.product(2,3))
console.log(math.square(3))
console.log(math.random(20,30))


// function fileUp(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('node.txt','utf8', (err, data) => {
//             if (err) reject(err);
//             resolve(data);
//         })
//     })
// } 

// fileUp().then((x)=>{
//     console.log(x.toUpperCase());
// })
