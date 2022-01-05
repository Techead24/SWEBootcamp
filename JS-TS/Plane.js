const Passenger = require('./Passenger') 
const Bag = require('./Bag') 

class Plane {

    // properties
    Type;
    Passenger;
    
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
const uche = new Passenger ("Uche", "246810AB", "34C")
// const ucheCheckedBag = new Bag()
vvf.board(uche)
console.log(vvf.Passenger)

    