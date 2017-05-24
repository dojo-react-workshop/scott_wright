function getMaxProfit(a){
    const obj={profit: a[1]-a[0], buyind:0, sellind:1};
    a.forEach((val,index)=>{
        for(let i=index+1; i<a.length; i++){
            if(a[i]-val > obj.profit){
                obj.profit = a[i]-val
                obj.buyind = index
                obj.sellind = i
            }
        }
    })
    return obj
}

const a = [10,7,5,8,11,9]

console.log(getMaxProfit(a))