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