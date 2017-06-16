function friendlyTime(HOUR, MINUTE, PERIOD){
	var outputString = `It's `
    var arr = []

	if (MINUTE >= 0 && MINUTE < 15){
		outputString += `quarter after `
	}
	else if (MINUTE >=15 && MINUTE <30){
		outputString += `half past `
	}
	else if (MINUTE >=30 && MINUTE <45){
		outputString += `quarter to `
		arr = checkTimeContext(HOUR, PERIOD)
		HOUR = arr[0]
		PERIOD = arr[1]
	}
	else{
		outputString += `almost `
		arr = checkTimeContext(HOUR, PERIOD)
		HOUR = arr[0]
		PERIOD = arr[1]
	}
	outputString += `${HOUR} `

	if (PERIOD === `AM`){
		outputString += `in the morning.`
	}
	else {
		outputString += 'in the evening.'
	}
	console.log(outputString)
}

function checkTimeContext(HOUR, PERIOD){
	//when it's almost the next hour, increment hour and check if period should change.
	var arr = []
	HOUR += 1

	//if it just turned 12 from 11, AM and PM should swap
	if (HOUR === 12){
		if (PERIOD === `AM`){
			PERIOD = `PM`
		}
		else{
			PERIOD = `AM`
		}
	}
	//if it turned 13 from 12, just set it to 1
	if (HOUR === 13){
		HOUR = 1
	}
	arr.push(HOUR)
	arr.push(PERIOD)
	return arr
}

friendlyTime(12,50,"AM")
friendlyTime(7,15,"PM")