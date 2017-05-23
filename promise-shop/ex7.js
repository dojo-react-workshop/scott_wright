 'use strict'; 
 
 
 /* global first, second */ 
 
 
 var firstPromise = first(); 
 
 
 var secondPromise = firstPromise.then(function (val) { 
   return second(val); 
 }); 
 
 
 secondPromise.then(console.log); 
 
 
 // As an alternative to the code above, ou could also do this: 
 // first().then(second).then(console.log); 
var sum
for (let i = 0; i < 100000000; i++){
    sum = i
}
