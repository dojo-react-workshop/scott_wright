const q = require('q-io/http');
const cachePromise = q.read("http://localhost:7000")


cachePromise.then((res)=>{
    const dbPromise = q.read(`http://localhost:7001/${res}`)
    return dbPromise
 })
 .then((res)=>{
     console.log(JSON.parse(res))
 }).done()

// scott = new Promise((x,y)=>{
//     if (1==2){
//         x('done')
//     } else {
//         y('bad')
//     }
// })

// scott.then(console.log).catch(console.log)