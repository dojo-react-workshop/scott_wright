var promise = new Promise((yes,reject)=>{
    setTimeout(()=>{
        yes('FULFILLED!')
    },500)
})
promise.then((x)=>{
    console.log(x)
})