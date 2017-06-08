function binStr(string, array = [], locations = []) {

    //set an array of locations to expand
    if (array.length==0){
        locations = Array.from(string).reduce((arr,x,i)=>{
            if (x=='?') arr.push(i)
            return arr
        },[])
    }

    if (locations.length==0)
        array.push(string)
    else {
        let index = locations.pop()
        let firstSlice = string.slice(0,index)
        let secondSlice = string.slice(index+1)
        binStr(firstSlice + '0' + secondSlice, array, locations)
        binStr(firstSlice + '1' + secondSlice, array, locations)
    }
    return array
}


console.log(binStr('?,?,?'))