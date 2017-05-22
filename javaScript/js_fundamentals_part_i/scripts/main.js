// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
let x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
x.forEach(function (val) {
    console.log(val);
})

//  Add a new value (100) in the array x using a push method.
x.push(100);

//  Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.
x = x.concat(["hello", "world", "JavaScript is Fun"]);
console.log(x);

//  Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
console.log(`sum of 1 to 500 is: ${sum}`);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
x = [1, 5, 90, 25, -3, 0];
let max = x[0];
x.forEach(function (val) {
    if (val > max) {
        max = val;
    }
})
console.log(`max is: ${max}`);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
x = [1, 5, 90, 25, -3, 0];
let avg = 0;
x.forEach(function (val) {
    avg += val;
})
console.log(`average is: ${avg/x.length}`);

// Write a for-in loop that will navigate through the object below (or write your own object):
var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

Object.entries(newNinja).forEach(function(val){
    console.log(`key: ${val[0]}, value: ${val[1]}`)
})