const Bag = require('./Bag');
const Traveller = require('./Traveller')



class Passenger extends Traveller{


    //properties
    seatNumber;
    passportNumber;
    

    //constructor
    constructor(seatNumber, passportNumber, name) {
        super(name)
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
    }

}
// //test code
// const mandyPax = new Passenger("mandypax");
// const mandyBag = new Bag (24);
// mandyPax.addBags(mandyBag);

// console.log(mandyPax instanceof Passenger)
// console.log(mandyPax.bags.length)

// const uche = new Passenger("34C","246810AB", "uche");
// const ucheBag = new Bag(21);
// uche.addBags(ucheBag)
// console.log(uche.bags.length)
// console.log(uche)



module.exports = Passenger
