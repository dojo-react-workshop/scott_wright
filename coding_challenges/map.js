
//map function
Array.prototype.map = function (callBack){
    let newArr = [];
    this.forEach(function(current, index){
        this[index] = callBack(current);
    }, newArr)
    return newArr
}

const a = [1, 2, 3, 4];
console.log(a.map(function(x){return x+=1}));