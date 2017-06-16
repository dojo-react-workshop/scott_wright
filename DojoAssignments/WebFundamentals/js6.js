// load math.js
var math = require('mathjs');

function slots(quarters, minCollection){
	var win=0
	var totalCollected=0

	while (quarters > 0){

		if(minCollection){
			if(totalCollected > minCollection){
				return quarters
			}
		}
		//spend a quarter to play
		quarters--
		if(math.floor(math.random() * 100)==50){
			//you won
			win = math.floor(math.random() * 50) + 50
			quarters+=win
			totalCollected+=win
			console.log(`You win: ${win} balance is: ${quarters} total collected is: ${totalCollected}`)
		}
	}
	return quarters
}

console.log(`quarters returned: ${slots(1000,1000)}`)