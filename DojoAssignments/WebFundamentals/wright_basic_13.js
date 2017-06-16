// Print 1-255
// Print1To255()
// Print all the integers from 1 to 255. 
Print1To255()


function Print1To255(){
	for (var i=1; i<=255; i++){
		console.log(i)
	}
}

// Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

function PrintIntsAndSum0To255(){
	var sum=0
	for (var i=0; i<=255; i++){
		sum+=i
		console.log(i + ", " + sum)
	}
}

// Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 
function PrintMaxOfArray(arr){
	var max=0
	for (var i=0; i<arr.length; i++){
		if (arr[i] > max){
			max = arr[i]
		}
  	}
	console.log(max)
}

// Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  
function ReturnOddsArray1To255(){
	var arr = []
	for (var i=1;i<=255; i+=2){
		arr.push(i)
	}
	return arr
}

// Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 
function ReturnArrayCountGreaterThanY(arr, y){
	var count = 0
	for (var i=0; i<arr.length; i++){
		if (arr[i] > y) {
			count++
		}
	}
	console.log(count)
}

// Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr){
	var min=0
	var max=0
	var average=0
	for (var i=0; i<arr.length; i++){
		if (arr[i] < min){
			min=arr[i]
		}
		if (arr[i] > max){
			max=arr[i]
		}
		average+=arr[i]
	}
	console.log(max + "," + min + "," + (average/arr.length))
}

// Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr){
	for (var i=0;i<arr.length;i++){
		if (arr[i] < 0){
			arr[i] = "dojo"
		}
	}
	return arr
}

// Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255. 
function PrintOdds1To255(){
	for (var i=1;i<=255; i+=2){
		console.log(i)
	}
}

// Iterate and Print Array
// PrintArrayVals(arr)
// Iterate through a given array, printing each value. 
function PrintArrayVals(arr){
	for (var i=0; i<arr.length; i++){
		console.log(arr[i])
	}
}

// Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average. 
function PrintAverageOfArray(arr){
	var average=0
	for (var i=0; i<arr.length; i++){
		average+=arr[i]
	}
	console.log(average/arr.length)
}

// Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 
function SquareArrayVals(arr){
	for (var i=0; i<arr.length; i++){
		arr[i]=arr[i]*arr[i]
	}
	return arr
}

// Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 
function ZeroOutArrayNegativeVals(arr){
	for (var i=0; i<arr.length; i++){
 		if (arr[i]<0){
			arr[i]=0
		}
	}
	return arr
}
// Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (z
function ShiftArrayValsLeft(arr){
	for (var i=0; i<arr.length-1; i++){
		arr[i]=arr[i+1]
	}
	arr[arr.length-1]=0
	return arr
}