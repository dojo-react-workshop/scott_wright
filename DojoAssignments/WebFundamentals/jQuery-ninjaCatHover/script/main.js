$(document).ready(function(){
	$(`img`).click(function(){
		var temp = $(this).attr(`src`)
		$(this).attr(`src`, $(this).attr(`data-other`))
		$(this).attr(`data-other`, temp)		
	})
	$(`img`).hover(function(){
		var temp = $(this).attr(`src`)
		$(this).attr(`src`, $(this).attr(`data-other`))
		$(this).attr(`data-other`, temp)		
	},function(){
		var temp = $(this).attr(`src`)
		$(this).attr(`src`, $(this).attr(`data-other`))
		$(this).attr(`data-other`, temp)	
	})
})
