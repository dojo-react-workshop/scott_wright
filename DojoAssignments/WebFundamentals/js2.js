var daysUntilMyBirthday = 60

for (var daysLeft = daysUntilMyBirthday; daysLeft > 0; daysLeft--){
	if (daysLeft > 30){
		console.log(`${daysLeft} days until my birthday. Such a long time ... :(`)
	}
	else if (daysLeft < 5){
		console.log(`${daysLeft} DAYS UNTIL MY BIRTHDAY!!!`)		
	}
	else{
		console.log(`Only ${daysLeft} days until my birthday!`)
	}
}
if (daysLeft === 0){
	console.log(`♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*\n♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪\n*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«`)
}