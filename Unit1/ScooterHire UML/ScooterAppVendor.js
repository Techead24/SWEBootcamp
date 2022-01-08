
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

            // else{
            //     console.log("you have not chosen Dott or Tier as a service")

            // }

        if (this.name == "Dott") {
            console.log("Thanks for choosing Dott")
            return true
            }
    
            // else{
            //     console.log("you have not chosen Lime or Tier as a service")
    
            // }
        

        if (this.name == "Tier") {
        console.log("Thanks for choosing Tier")
        return true
        }

            // else{
            //     console.log("you have not chosen Lime or Dott as a service")

            // }
    }
  

}

//Test code
const lime = new ScooterAppVendor("Lime");
const dott = new ScooterAppVendor("Dott")
const tier = new ScooterAppVendor("Tier")

module.exports = ScooterAppVendor