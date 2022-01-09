const Maintenance = require('../Maintenance')


describe('if a ticket has been escalated to the maintenance team', function () { 

    test('escalated to maintenance', function () {
        // given
        const issueOne = new Maintenance("yes");

        // then
        expect(issueOne.maintenanceAction()).toBe(true);
        
    });

    test('escalated to maintenance', function () {
        // given
        const issueOne = new Maintenance("no");

        // then
        expect(issueOne.maintenanceAction()).toBe(false);
        
    });

});