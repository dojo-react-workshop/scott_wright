var promise = new Promise((yes,no)=>{
    yes('PROMISE VALUE')
    no(new Error('I DID NOT FIRE'))
})

function onRejected(e){
    console.log(e.message)
}

promise.then(console.log).catch(onRejected)
console.log('MAIN PROGRAM')

var promise2 = Promise.resolve('this was resolved')
var promise3 = Promise.reject(new Error('this was rejected'))
promise3.catch((e)=>{
    console.log(e.message)
})
promise2.then((x)=>{
    console.log(x)
})
