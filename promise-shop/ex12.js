const q = require('q-io/http');
const promise = q.read("http://localhost:1337")
promise.then((json)=>{
  console.log(JSON.parse(json));
})

