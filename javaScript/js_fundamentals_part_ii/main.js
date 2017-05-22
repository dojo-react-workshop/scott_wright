// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumInt(x,y){
    let sum=0
    for (let i = x; x<=y; i++){
        sum+=i;
    }
    console.log(sum);
}

// Write a loop that will go through an array, find the minimum value, and then return it
function findMin(arr){
    let min=arr[0];
    arr.forEach(function(val){
        if(val<min){
            min=val;
        }
    })
    return min;
}
// Write a loop that will go through an array, find the average of all of the values, and then return it
function findAvg(arr){
    let avg=0;
    arr.forEach(function(val){
        avg+=val;
    })
    return avg/arr.length;
}
// Rewrite these 3 as anonymous functions assigned to variables.

const fSumInt = function(x,y){
    let sum=0
    for (let i = x; x<=y; i++){
        sum+=i;
    }
    console.log(sum);
}
const fFindMin = function (arr){
    let min=arr[0];
    arr.forEach(function(val){
        if(val<min){
            min=val;
        }
    })
    return min;
}

const fFindAvg = function (arr){
    let avg=0;
    arr.forEach(function(val){
        avg+=val;
    })
    return avg/arr.length;
}

// Rewrite these as methods of an object
let myObject = {}
myObject.fSumInt = function(x,y){
    let sum=0
    for (let i = x; x<=y; i++){
        sum+=i;
    }
    console.log(sum);
}
myObject.fFindMin = function (arr){
    let min=arr[0];
    arr.forEach(function(val){
        if(val<min){
            min=val;
        }
    })
    return min;
}
myObject.fFindAvg = function (arr){
    let avg=0;
    arr.forEach(function(val){
        avg+=val;
    })
    return avg/arr.length;
}

// Create a JavaScript object called person with the following properties/methods

// Properties
// name - set this as your own 
// namedistance_traveled - set this initially as zero
// Methods
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. 
// This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
// What should your methods return?
let person = {}
person.name = `scott`;
person.distance_traveled = 0;
person.say_name = function(){
    console.log(this.name);
}
person.say_something = function(val){
    console.log(`${this.name} says '${val}'`)
}
person.walk = function(){
    console.log(`${this.name} is walking`)
    this.distance_traveled += 3
}
person.run = function(){
    console.log(`${this.name} is running`)
    this.distance_traveled += 10
}
person.crawl = function(){
    console.log(`${this.name} is crawling`)
    this.distance_traveled += 1
}