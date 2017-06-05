function flat(a, newA=[]) {
    for (let i = 0; i < a.length; i++){

        if (a[i] instanceof Array)
            flat(a[i], newA)
        else
             newA.push(a[i])
    }
    return newA
}

//console.log(flat([1,[2,[3,4]]]))

function bal(a) {
    let iLeft = 0
    let iRight = a.length-1
    let leftSum = a[iLeft]
    let rightSum = a[iRight]

    while(iLeft < iRight-1){
        if(leftSum < rightSum){
            iLeft++
            leftSum += a[iLeft]
        } else {
            iRight--
            rightSum += a[iRight]
        } 
    }
console.log(leftSum,rightSum)
    iLeft = 0
    iRight = a.length-1
    leftSum = a[iLeft]
    rightSum = a[iRight]

    while(iLeft > iRight-1){
        if(leftSum > rightSum){
            iRight--
            rightSum += a[iRight]
        } else {
            iLeft++
            leftSum += a[iLeft]
        } 
    }
 console.log(leftSum,rightSum)
}
console.log(bal([20,-10,10]))
