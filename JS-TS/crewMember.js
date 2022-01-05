class crewMember {

    // properties
    name;
    position;
    staffNumber;
    
    //constructor 
    constructor(name, position, staffNumber) {
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
        
    }
}

const linda  = new crewMember ("Linda", "Pilot", "1")
const stella =  new crewMember ("Stella", "flightassistant", "2")
console.log(stella)
console.log(linda)


module.exports = crewMember
