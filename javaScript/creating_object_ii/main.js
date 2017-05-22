
// Have the Vehicle constructor also take in a “speed” Store the speed as an attribute 
// Create a private variable called distance_travelled that starts at 0 
// Create a private method called updateDistanceTravelled that increments distance traveled by speed
// Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
// Add a method called checkMiles that console.logs the distance_travelled

function VehicleConstructor(name, numWheels, numPassengers, speed){
    //private
    var distance_travelled=0;
    function updateDistancetravelled(that){
        distance_travelled+=that.speed;
        console.log(that.speed)
        console.log(distance_travelled)
    }
    
    //public
    this.name=name;
    this.numWheels=numWheels;
    this.numPassengers=numPassengers;
    this.speed=speed;
    this.makeNoise=function(){
        console.log(`${this.name} makes a noise.`);
    }
    this.move=function(){
        updateDistancetravelled(this);
        this.makeNoise();
    }
    this.checkMiles=function(){
        console.log(distance_travelled);
    }
}

var bus = new VehicleConstructor('Bus',4,5,10);

bus.move();
bus.checkMiles();
bus.speed=-10;
bus.move();
bus.checkMiles();
