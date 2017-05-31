function terraces(arr){
    let maxInd = 0
    let maxVal = arr[0]
    let vol = 0
    let edge = arr[0]

    //find the max
    arr.forEach((val,index)=>{
        if (val > maxVal) {
            maxVal = val
            maxInd = index
        }
    })

    //add volume left of the max
    for (let i = 1; i < maxInd; i++)
        if (edge > arr[i]) vol+= edge - arr[i]
        else edge=arr[i]

    //add volume right of the max
    for (let i = arr.length-1; i > maxInd; i--)
        if (edge > arr[i]) vol+= edge - arr[i]
        else edge=arr[i]
    
    
    return vol
}

console.log(terraces([2,1,3,1,2,1,4,1,3]))