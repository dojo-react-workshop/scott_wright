//var totalDays = 1031
function servent(totalDays){
	var days = 1
	var amount = .01
	var sum = 0
	while (days <= totalDays){
		sum += amount
		if (days === totalDays){
			console.log(`day: ${days} amount given: ${amount} total: ${sum}`)
			break
		}
		amount = amount * 2
		days ++
	}
}

//after 30 days
servent(30)

//20 days to get $10K
servent(20)

//37 days to get $1 billion
servent(37)

//1031 days to get infinity
servent(1031)