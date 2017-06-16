
// function doStuff(num1, num2){
// 	var resultNumber
// 	var resultString
// 	if (typeof(num1)!=`number` || typeof(num2)!=`number`){
// 		return 'both parameters must be numbers'
// 	}
// 	resultNumber = num1 + num2
// 	resultString = resultNumber.toString()
// 	return resultString[0]
// }

// console.log(doStuff(10,'1'))
// console.log(``)
// console.log(doStuff(10,40))



// function countDown(i, end){

// 	if (end == undefined) {
// 		end=i-10
// 	}
// 	console.log(i, end)
	
// 	if (i <= end) {
// 		return i
// 	}

// 	return countDown(i-1,end)
// }

// console.log(countDown(10))


// function add(i, sum=0){

// 	if (i<1) {
// 		return sum
// 	}
// 	sum = add (i-1, sum)
// 	return sum+i
// }

// var x = add(5)
// console.log(`xxxx`,x)









// function add(i, sum=0){
// 	if (i<=1) return 1
// 	sum+=add(i-1,sum)
// 	console.log(sum)
// 	return sum+i
// }

// console.log(add(5))







// function perm(str,count=0){
// 	if(count==str.length-1) return
// 	for (var i=0; i<str.length; i++){
// 		console.log(str)
// 		str = swap(str)
// 	}
// 	perm(scram(str),++count)
// }

// function swap(str){
// 	var str1=``
// 	for (var i=0; i < str.length-1; i++){
// 		str1+=str[i+1]
// 	}
// 	str1+=str[0]
// 	return str1
// }


// function scram(str){
// 	var arr=str.split(``)
// 	temp=arr[0]
// 	arr[0]=arr[1]
// 	arr[1]=temp
// 	return arr.join(``)
// }



// perm(`abcd`)



for (let i=0; i<5;i++){
	console.log(i)
}
console.log(i)