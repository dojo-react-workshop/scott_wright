// load math.js
var math = require('mathjs');

function search(arr, key){
	if (arr.length < 1){
		return -1;
	}
	var lowerIndex = 0;
	var upperIndex = arr.length - 1;
	var midIndex;

	console.log (lowerIndex + " " + upperIndex + " " + midIndex)
	while (upperIndex != lowerIndex){
		midIndex = math.ceil((upperIndex + lowerIndex)/2);

		if (arr[midIndex] === key){
			//found it
			return midIndex;
		}

		//it's on the right side of the split
		if(arr[midIndex] < key){
			lowerIndex = midIndex;
		}

		//it's on the left side of the split
		else {
			upperIndex = midIndex -1;
		}

			console.log (lowerIndex + " " + upperIndex + " " + midIndex)
	}
	//never found it
	return -1;
}

console.log(search([10,20,30,100,200],100));
// console.log(search([],5));