const Bag = require('./Bag');
const Traveller = require('./Traveller');

class crewMember extends Traveller {

    // properties
    position;
    staffNumber;
    
    //constructor 
    constructor(name, position, staffNumber) {
        super(name)
        this.position = position
        this.staffNumber = staffNumber
        
    }
}

// const linda  = new crewMember ("Linda", "Pilot", 1 )
// const stella =  new crewMember ("Stella", "flightassistant", 2)
// console.log(stella)
// console.log(linda)


module.exports = crewMember
