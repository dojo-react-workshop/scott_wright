$(document).ready(function(){

	$(`#searchButton`).click(function(){
		var searchText = $(`#search`).val()
		var str=``
		if ($(this).data(`old`)){
			str=`last time you searched for: ${$(this).data(`old`)} --- this time you searched for ${searchText}`
		} else {
			str=`you searched for ${searchText}`
		}
		alert(str)
		$(this).data(`old`,searchText)
	})

	$(`#header`).click(function(){
		$(this).hide(500)
		$(this).show(100)	
		$(`#topLogo`).toggle("slow")			
	})

	$(`#topLogo`).mouseenter(function(){
		$(this).toggle("slow")	
	})

	$(`#bottomTop`).click(function(){
		$(`#bottomBottom`).slideToggle(200)
	})

	$(`#productButton`).click(function(){
		$(`#video`).fadeOut(200)
	})

	$(`#tourButton`).click(function(){
		$(this).addClass(`green`)
		$(this).before(`Green Button`)
	})

	$(`#trialButton`).click(function(){
		$(this).html(`Trial Button`)
	})

	$(`#buyButton`).click(function(){
		$(this).html(`email link changed`)
		$(`#footer a`).attr(`href`,`http://www.google.com`)
		$(`#footer a`).text(`google`)
	})
})
