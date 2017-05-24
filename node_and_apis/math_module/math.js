// Return the sum from two numbers
// Return the product of two numbers
// Return the square of a number
// Return a random value between two numbers


function obj(){
    this.sum = function(a,b){
        return a+b
    }
    this.product = function(a,b){
        return a*b
    }
    this.square = function(a){
        return a*a
    }
    this.random = function(a,b){
        return Math.floor(Math.random() * (b-a))+a+1
    }
}

module.exports = new obj()