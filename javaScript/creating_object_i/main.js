function VehicleConstructor(name, numWheels, numPassengers){
    var v={};
    v.name=name;
    v.numWheels=numWheels;
    v.numPassengers=numPassengers;
    v.makeNoise=function(){
        console.log(`${this.name} makes a noise.`);
    }
    return v;
}

var bike = VehicleConstructor('Bike',2,1);
bike.makeNoise=function(){
    console.log(`${this.name}: 'ring ring!'`);
}

var sedan = VehicleConstructor('Sedan',4,5);
bike.makeNoise=function(){
    console.log(`${this.name}: 'Honk Honk!'`);
}

var bus = VehicleConstructor('Bus',4,5);
bus.pickUp=function(count){
    this.numPassengers+=count
}

bike.makeNoise()




function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.name = name;              
  this.age = age;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {   
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}
// Copy
// Create a new ninja:

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
Pariece.introduce()