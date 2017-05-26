function getProducts(arr){
    //build array of before products
    const beforeProds = []
    let rollingProd = 1
    for(let i = 0; i< arr.length; i++){
        beforeProds.push(rollingProd)
        rollingProd *= arr[i]
    }
    
    //build array of after products
    const afterProds = []
    rollingProd = 1
    for(let i = arr.length-1; i>= 0; i--){
        afterProds[i]=rollingProd
        rollingProd *= arr[i]
    }
    const finalProds=[]
    for(let i = 0; i < arr.length; i++){
        finalProds.push(beforeProds[i]*afterProds[i])
    }
    return finalProds
}

console.log(getProducts([5,1,3,8,2]))