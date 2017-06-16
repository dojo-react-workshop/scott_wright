$(document).ready(function(){
	$(`img`).click(function(){
		$(this).hide(200)
	})

	$(`button`).click(function(){
		$(`img`).show(200)
	})
})
