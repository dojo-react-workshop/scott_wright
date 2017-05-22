//filter function
Array.prototype.filter = function(cb){
    let newArr=[];
    this.forEach(function(current){
        if(cb(current)){
            newArr.push(current)
        }
    }, newArr)
    return newArr
}

const a = [1, 2, 3, 4];
console.log(a.filter(function(x){return (x%2==0)}));
