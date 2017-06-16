function countLetter(str){
	var obj={}
	var str2=``
	for (var i = 0; i<str.length; i++){
		if(!obj[str[i]]){
			str2=i
	
			obj[str[i]]=str2
		}
		else{
			obj[str[i]]+=`,${i}`
		}
	}
	var str2=``
	for(var q=0; q<str.length; q++){
		if(obj[str[q]] == 1){
			str2+=str[q]
		}
	}
	return obj
}

// console.log(countLetter("too many people"))

// console.log(this)


function replace(str){
	var str2=""
	for (var i = 0; i < str.length; i++) {
		if(str[i]===`?`){
			console.log('found a ?')
			str2+=`0`
		}
		else
		{
			str2+=str[i]
		}
	}
	return str2
}

console.log(replace(`1?1?1?`))