var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

var fName, lName
for (var grp in users){
	console.log(grp)
	for (var i = 0; i < users[grp].length; i++){
		fName=users[grp][i].first_name
		lName=users[grp][i].last_name
		console.log(`${i+1} - ${fName} ${lName} - ${fName.length + lName.length}`)
	}
}

//console.log(users["Students"][0].first_name)

// var user, i, firstName, lastName
// Object.keys(users).forEach(function(key) {
// 	console.log(key)
// 	i=0
// 	Object.keys(users[key]).forEach(function(key2){
// 		i++
// 		firstName=users[key][key2].first_name
// 		lastName=users[key][key2].last_name
// 		console.log(`${i} - ${firstName} ${lastName} - ${firstName.length + lastName.length}`)

// 	})
// });

// Object.keys(users).map(function(key){
// 	console.log(key)
// 	Object.keys(users[key]).map(function(key2){
// 		console.log(`${users[key][key2].first_name}`)
// 	})
// })