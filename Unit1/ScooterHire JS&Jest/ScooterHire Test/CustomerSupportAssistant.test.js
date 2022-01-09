const CustomerSupportAssistant = require('../CustomerSupportAssistant')


describe('if a ticket has been raised by user', function () { 

    test('if ticket has been raised, to be escalated', function () {
        // given
        const ticket = new CustomerSupportAssistant ("yes");

        // then
        expect(ticket.ticketsRaised()).toBe(true);
        
    });

    test('if ticket has been raised, to be escalated', function () {
        // given
        const ticket = new CustomerSupportAssistant ("no");

        // then
        expect(ticket.ticketsRaised()).toBe(false);
        
    });

});