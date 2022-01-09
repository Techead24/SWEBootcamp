
class ScooterAppVendor{

    //properties
    name;

    //constructor 
    constructor(name){
        this.name = name
    }

    //selecting vendor
    vendor() {
    // var test = prompt("Select the vendor")
        if (this.name == "Lime") {
        console.log("Thanks for choosing Lime")
        return true
        }

            
        if (this.name == "Dott") {
            console.log("Thanks for choosing Dott")
            return true
            }
    
        
        if (this.name == "Tier") {
        console.log("Thanks for choosing Tier")
        return true
        }

            
    }
  

}

//Test code
const lime = new ScooterAppVendor("Lime");
const dott = new ScooterAppVendor("Dott")
const tier = new ScooterAppVendor("Tier")

module.exports = ScooterAppVendor