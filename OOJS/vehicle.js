(function(){
 
/*    var vehicle = {};
    vehicle.engine="";
    vehicle.type="";
    vehicle.body="";
    vehicle.tyres="";*/
 function vehicle(){
            this.tyres=0;//default and let my classes decide how may tyres
            this.engine="";
            this.color="";
    var vin=""; //is a privat property
    
};

var bike = new vehicle();// allocating the same space for bike as of vehicle and creating instance of the vehicle.
//bike.tyres=2;//bike memory is diff
var car = new vehicle();//instance of a vehicle.
//car.tyres=4;// memory is diff than bike
console.log(bike);
console.log(car);
})();