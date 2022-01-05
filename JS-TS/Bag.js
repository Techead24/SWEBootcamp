class Bag {

    // properties
    weight;
    
    /**
     * Constructs a new instance of the Bag class
     * @param {Number} weight 
     */
    constructor(someWeight) {
        // set the weight that is passed in to be the weight of "this" new instance we are constructing
        this.weight = someWeight;
    }

    isOverLimit() {
        // TODO - add code to check if weight of the bag is over the limit (23kg)
        if (this.weight > 23) {
            console.log("This is over the weight limit")
            return true
        }
        else{
            console.log("This is within weight limit")
            return false
            
        }

    }
}

// Test code
const mandyBag = new Bag(13);
const ucheBag = new Bag(22)

 
console.log(mandyBag.isOverLimit());
console.log(ucheBag.isOverLimit());

module.exports = Bag
