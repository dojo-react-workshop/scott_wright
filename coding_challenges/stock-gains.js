// function getMaxProfit(a){
//     const obj={profit: a[1]-a[0], buyind:0, sellind:1};
//     a.forEach((val,index)=>{
//         for(let i=index+1; i<a.length; i++){
//             if(a[i]-val > obj.profit){
//                 obj.profit = a[i]-val
//                 obj.buyind = index
//                 obj.sellind = i
//             }
//         }
//     })
//     return obj
// }
function maxP(a){
    let min=a[0]
    let max=a[1]
    let profit=max-min
    for(let i=1; i<a.length-1; i++){
        if (min > a[i] && profit < max - a[i]){
            min=a[i]
            max=a[i+1]
        }
        if (max < a[i+1]){
            max = a[i+1]
        }
        if (max-min > profit){
            profit=max-min
        }
    }
    return profit
}





const a = [10,7,5,8,11,9]
//const a = [10,9,8,7,6,5]
console.log(maxP(a))
//console.log(getMaxProfit(a))