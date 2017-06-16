function fancy(arr, seperator=`->`, reversed=false){
	if (reversed){
		for(var i = arr.length-1; i >= 0; i--){
			console.log(`${i} ${seperator} ${arr[i]}`)
		}
	}
	else{
		for(var i = 0; i < arr.length; i++){
			console.log(`${i} ${seperator} ${arr[i]}`)
		}
	}
}

fancy([`one`,`two`,`three`])
console.log(``)
fancy([`one`,`two`,`three`],`---`)
console.log(``)
fancy([`one`,`two`,`three`],`~=~`,true)
