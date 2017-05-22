// Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.
// You may have to change some private variables/methods to attributes to make all of the functionality work.
// Then make the following additions:
// Have each vehicle generate a random VIN number (study Math.random & Math.floor). 
// Don’t worry about potential duplicates for now.


function VehicleConstructor(name, numWheels, numPassengers, speed){
     //public
    this.distance_travelled=0;
    this.name=name;
    this.numWheels=numWheels;
    this.numPassengers=numPassengers;
    this.speed=speed;

    //generate vin number
    this.VIN=Math.floor(Math.random() * 1000) + 1
}
VehicleConstructor.Prototype.makeNoise=function(){
    console.log(`${this.name} makes a noise.`);
}
VehicleConstructor.Prototype.move=function(){
    this.updateDistancetravelled();
    this.makeNoise();
}
VehicleConstructor.Prototype.checkMiles=function(){
    console.log(this.distance_travelled);
}
VehicleConstructor.Prototype.updateDistancetravelled=function(){
    this.distance_travelled+=this.speed;
    console.log(this.speed)
    console.log(this.distance_travelled)
}

var bus = new VehicleConstructor('Bus',4,5,10);

bus.move();
bus.checkMiles();
bus.speed=-10;
bus.move();
bus.checkMiles();
