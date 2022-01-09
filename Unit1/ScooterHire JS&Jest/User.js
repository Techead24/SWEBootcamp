const ScooterAppVendor = require('./ScooterAppVendor') 

class User{

    //properties
    name;
    DOB;
    age;
    
    
   /**
     * Constructs a new instance of the Bag class
     * @param {Number} DOB
     * @param {Number} age
     */

   constructor(name, DOB, age) {
    this.name = name;
    this.DOB = DOB;
    this.age = age;
   }

    //checking age requirements
    checkAge(){
        if(this.age > 17) {
            console.log("you meet the age reqirement, please login")
            return true
        }

        else;{
            console.log("Sorry you dont meet the requirements")
            return false
      
        }
    }
   
   

}


const uche = new User ("Uche", 19121998, 23);
const lime = new ScooterAppVendor("Lime");
const dott = new ScooterAppVendor("Dott");
const tier = new ScooterAppVendor("Tier");

console.log(dott.vendor());
console.log(uche)
console.log(uche.checkAge())

module.exports = User