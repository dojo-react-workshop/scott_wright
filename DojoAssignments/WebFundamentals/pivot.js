// load math.js
var math = require('mathjs')

function pivot(arr){
	var leftInd = 0
	var rightInd = arr.length -1
	var leftSum = 0
	var rightSum = 0
	while (leftInd <= rightInd) {
		if(leftSum <= rightSum) {
			leftSum+=arr[leftInd++]
			console.log(`adding to left sum is ${leftSum}, lIndex is ${leftInd}`)
		}
		else{
			rightSum+=arr[rightInd--]
			console.log(`adding to right sum is ${rightSum}, rIndex is ${rightInd}`)			
		}
	}
	if(leftSum==rightSum){
		return true
	}
	else{
		return false
	}
}

// var arrF=[20,1,7,14,2]
// var arrT=[20,3,1,1,1,20]

// console.log(pivot(arrT))


function objArray(arr1, arr2){
	var newObj = {}
	for (var i = 0; i < arr1.length; i++){
		// newObj={arr1[i]:arr2[i]}
		newObj[arr1[i]]=arr2[i]
	}
	return newObj
}

for (var x in objArray([1,2,3],[4,5,6])){
	console.log(x)
	console.log(typeof(x))

}
//console.log(objArray([1,2,3],[4,5,6]))
