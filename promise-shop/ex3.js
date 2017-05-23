var promise = new Promise((yes,reject)=>{
    setTimeout(()=>{
        reject(new Error('REJECTED!'))
    },500)
})

function onReject(error){
    console.log(error.message)
}

promise.then((x)=>{
    console.log(x)
},(x)=>{
    onReject(x)
})
