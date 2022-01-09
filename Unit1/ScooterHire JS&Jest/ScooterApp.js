const User = require('./User');


class ScooterApp{

    //properties
    city;
    borough;
    username;
    password;
    mileage;
    payment;
    user = [];
    
    

    //contructor
    constructor(city, borough, username, password, mileage, payment ){
    this.city = city
    this.borough = borough
    this.username = username
    this.password = password
    this.mileage = mileage
    this.payment = payment
    this.users = []

    }

    addUsers(User){
        this.users.push(User);
    }
    

} 

//Testing code
const lime = new ScooterApp("london", "enfield", "enter username:", "enter password:", "20km covered", "choose payment method", )
const uche = new User("Uche", 19121998, 23)
lime.addUsers(uche)
console.log(lime.users)
console.log(lime)


//reporting any issues to cistomer service
var markAsBroken = Boolean(true)

if (markAsBroken == true) {
    setTimeout(() => {console.log("Ride finished!. Thank you for notifying us, your feedback is appreciated. This scooter will no longer be available, a ticket has now been raised")}, 4000);
    
}
else{
    setTimeout(() => {console.log("Ride finished!. Thank you for notifying us, your feedback is appreciated.")}, 4000);
    }
    


//checking the health and battery of the scooter
var health = "The health is Great"
var battery = "Battery level is 100%"


        if (health == "The health is Great" && battery == "Battery level is 100%") {
            console.log("Please wait, we're checking the battery and health status")
            setTimeout(() => {console.log("This is available and ready to use!"); }, 2000);
            return true
        }

        else{
            setTimeout(() => {console.log("Sorry this is not available at this time, please select another scooter "); }, 2000);
            return false
        }


 module.exports= ScooterApp