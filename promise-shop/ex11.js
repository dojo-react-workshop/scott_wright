function all(p1, p2){
    let counter = 0
    let myResponse = []
    myPromise = new Promise((resolve, reject)=>{
        p1.then((x)=>{
            myResponse.push(x)
            counter++
            if (counter==2){
                resolve(myResponse)
            }
        })
        p2.then((x)=>{
            myResponse.push(x)
            counter++
            if (counter==2){
                resolve(myResponse)
            }
        })
    })
    return myPromise
}

newPromise = all(getPromise1(),getPromise2())

newPromise.then((x)=>{
    console.log(x)
})