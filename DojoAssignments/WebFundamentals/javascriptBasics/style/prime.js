function prime(arr){
	var newarr = [];
	for (var i=0; i < arr.length; i++){
		if (arr[i] > 2) {
			if (arr[i] % 2 == 0){
				newarr.push(false)
			}
			else{
				for (var x=3; x < arr[i]; x++){
					if(arr[i] % x == 0){
						newarr.push(false)
						break
					}
				}
			}

			if (newarr[i] != false){
				newarr.push(true)
			}

		}
		else if (arr[i] == 2 || arr[i] == 1){
			newarr.push(true)
		}
		else {
			newarr.push(false)
		}

	}

	return newarr
}

var num = [5,7,10,9,301,302,3,333,1,2,-1]
console.log(prime(num))