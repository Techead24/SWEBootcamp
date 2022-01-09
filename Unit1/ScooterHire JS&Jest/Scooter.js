
class Scooter{

//properties
    barcode;
    speed;

     /**
     * Constructs a new instance of the Bag class
     * @param {Number} barcode
     */

//constructor 
    constructor(barcode, speed) {
    this.barcode = barcode
    this.speed = speed
    }

//Checking speed 
    isOverLimit() {
        // TODO - add code to check if weight of the bag is over the limit (23kg)
        if (this.speed > 16) {
            console.log("Warning!, this is over the weight limit, please slow down")
            return true
        }
        else (this.speed > 16); {
            return false
        }
    }
}



//Testing code
const yellow = new Scooter(246810, 12)
console.log(yellow)
console.log(yellow.isOverLimit())
// const ScooterApp = require('./ScooterApp');




module.exports = Scooter