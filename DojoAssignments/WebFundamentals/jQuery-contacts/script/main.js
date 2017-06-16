$(document).ready(function(){
	$(`button`).click(function(){
		var fName=$(`input:text[name=fName]`).val()
		var lName=$(`input:text[name=lName]`).val()
		var desc=$(`textarea`).val()
		$(`#contactList`).append(`<div class="contact"><h1>${fName} ${lName}<h1><h6 desc="${desc}">click for desccription</h6></div>`)
	})
	$(`#contactList`).on(`click`, `.contact`, function(){
		$(this).children(`h1`).hide()
		$(this).children(`h6`).html(`<p>${$(this).children(`h6`).attr(`desc`)}</p>`)
	})
})



	