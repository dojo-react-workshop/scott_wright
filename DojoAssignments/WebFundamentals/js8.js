function nLargest(arr,n){
	var largest
	var largestIndex
	var i 
	//keep deleting the largest items 
	while (n>0){
		//find the largest item
		largest=arr[0]
		largestIndex=0
		for (i = 0; i < arr.length; i++){
			if (largest < arr[i]){
				largest=arr[i]
				largestIndex=i
			}
		}
		//delete the largest
		n--
		//arr[largestIndex]=undefined - this worked for positive, but not neg????
		//shift the elements over to over-write the largest item
		if (n>0){
			i = 0
			for (var x = 0; x < arr.length; x++){
				if (x != largestIndex){
					arr[i] = arr[x]
					i++
				}
			}
			//drop off that last item since we shifted over
			arr.length = arr.length -1
			console.log(arr)
		}
	}	
	console.log(largest)
}

// nLargest([-1,-7,-4,-9, -1, -2, -8],3)
// console.log(``)
// nLargest([1,7,4,9, 1, 2, 8],2)
// console.log(``)
// nLargest([1,7,4.4,-9, 1, -2, 8],3)

var p1 = {"name":"scott", job:"pending", func: function(){ var i=0}}

// console.log(p1.name)
// console.log(p1.job)
// console.log(p1["name"])

for (x in p1){
	console.log (typeof(p1[x]))
	console.log(p1[x])
}