const Bag = require('./Bag') 

// import {Bags} from './Bag.js';



class Passenger {

    // properties
    name;
    passportNumber;
    seatNumber;
    
    //constructor 
    constructor(name, passportNumber, seatNumber) {
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}


const uche = new Passenger("Uche", "246810AB", "34C")
const ucheHoldBag = new Bag(12)
const ucheCheckedBag = new Bag(22)
uche.addBag(ucheHoldBag)
uche.addBag(ucheCheckedBag)
console.log(uche.bags) 



module.exports = Passenger
