var promise = new Promise((yes,no)=>{
    yes('I FIRED')
    no(new Error('I DID NOT FIRE'))
})

function onRejected(e){
    console.log(e.message)
}

promise.then(console.log,onRejected)
