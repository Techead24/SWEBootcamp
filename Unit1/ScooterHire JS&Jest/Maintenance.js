class Maintenance {
    

    //property
    escalatedToMaintenance;

    //coontructor
    constructor(escalatedToMaintenance){
        this.escalatedToMaintenance = escalatedToMaintenance
    }

    maintenanceAction(){
        if (this.escalatedToMaintenance == "yes"){
            console.log("generating user report for scooter")
            return true
        }
        else{
            return false
        }
    }

}

const issueOne = new Maintenance("yes")
console.log(issueOne.maintenanceAction())
setTimeout(() => {const User = require('./User')},2000);
setTimeout(() => {const Scooter = require('./Scooter')},2000);



module.exports = Maintenance