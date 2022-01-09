class CustomerSupportAssistant {

    //properties
    raisetTickets

    //constructor
    constructor(raisetTickets) {
    this.raisetTickets = raisetTickets
    }

    ticketsRaised() {
        if (this.raisetTickets == "yes") {
            console.log("escalate to maintenance")
            return true
        }

        else{
            return false
        }
    }


}

const ticket = new CustomerSupportAssistant ("yes")
console.log(ticket.ticketsRaised())


module.exports = CustomerSupportAssistant
