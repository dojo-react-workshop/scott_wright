// Problem 1
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

//function is hoisted, but never called
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
//variable is undefined (javascript will delcare it for us)
console.log(first_variable);
//variable is re-declared and assigned
var first_variable = "Yipee I was first!";
console.log(first_variable);

// Problem 2:
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

//function hoisted
function eat() {
  food = "half-chicken";
  console.log(food);
  //using a version of food for the function only
  var food = "gone";       // CAREFUL!
  console.log(food);
}
var food = "Chicken";
eat();
console.log(food);

// Problem 3:
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

//function hoisted, never called
function lastFunc() {
  new_word = "old";
}
var new_word = "NEW!";

console.log(new_word);