$(document).ready(function(){
	$(`img`).click(function(){
		var house=$(this).attr(`alt`)
		var URL=`https://www.anapioficeandfire.com/api/houses?name=${house}`
				$(`#name`).html(`<p>Name:</p>`)
				$(`#words`).html(`<p>Words:</p>`)
				$(`#titles`).html(`<p>Titles:</p>`)
		$.get(URL,function(data){
				$(`#name`).html(`<p>Name: ${data[0].name}</p>`)
				$(`#words`).html(`<p>Words: ${data[0].words}</p>`)
				$(`#titles`).html(`<p>Titles: ${data[0].titles}</p>`)
		},`json`)
	})
})






	