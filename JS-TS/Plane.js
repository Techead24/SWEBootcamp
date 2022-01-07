const Passenger = require('./Passenger') 
const Bag = require('./Bag') 

class Plane {

    // properties
    type;
    passenger;
    
    //constructor 
    constructor(Type) {
       this.Type = Type;
       this.Passenger = []
    }

   board(Passenger) {
        this.Passenger.push(Passenger)
   }
}

const vvf = new Plane ("1234")
const uche = new Passenger ("34C", "246810AB", "Uche")
// const ucheCheckedBag = new Bag()
vvf.board(uche)
console.log(vvf.Passenger) 

    