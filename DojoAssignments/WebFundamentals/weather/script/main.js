$(document).ready(function(){
	$(`button`).click(function(){
		var city=$(`input:text[name=city]`).val()
		var apiKey=`b0f3d6a71e537bf734cbf12b26fc3530`
		var URL=`http://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${apiKey}`

		$.get(URL,function(data){
				$(`#bottomPart`).html(`<h1>${data.name}</h1><p>Current Temp is ${data.main.temp}F</p>`)
		})
	})
})






	