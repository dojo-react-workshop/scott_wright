$(document).ready(function(){
	$(`button`).click(function(){
		var fName=$(`input:text[name=fName]`).val()
		var lName=$(`input:text[name=lName]`).val()
		var eMail=$(`input:text[name=eMail]`).val()
		var phone=$(`input:text[name=phone]`).val()
		if(fName && lName){
			if (!eMail){
				eMail = `&nbsp;`
			}
			if (!phone){
				phone = `&nbsp;`
			}
			$(`table tbody`).append(`<tr><td>${fName}</td><td>${lName}</td><td>${eMail}</td><td>${phone}</td></tr>`);
		} else {
			alert(`first and last name are required`)
			return false
		}
	})
})
