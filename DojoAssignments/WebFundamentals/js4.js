function printRange(start, end, increment=1){
	var continueLoop = true
	//no end was submitted, assumed the start passed in is actually the end.
	if (!end){
		end = start
		start = 0
	}
	if (increment < 0 && start < end){
		console.log (`if negative increment, please have start value greater than end value.`)
		return 
	}

	var i = start
	while (continueLoop==true){
		console.log(i)	
		i+= increment
		

		if (increment > 0){
			if (i > end - increment){
				continueLoop = false
			}
		}
		else{
			if (i < end + increment) {
				continueLoop = false
			}
		}
	}
		
}
printRange(2,10,2)
console.log(``)
printRange(4,8)
console.log(``)
printRange(4)
console.log(``)
printRange(4,8,-1)
console.log(``)
printRange(8,4,-1)

