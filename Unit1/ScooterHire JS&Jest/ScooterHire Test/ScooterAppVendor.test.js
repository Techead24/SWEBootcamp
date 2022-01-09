const ScooterAppVendor = require('../ScooterAppVendor');

describe('check chosen vendor', function () { 

    test('Checking app vendor', function () {
        // given
        const lime = new ScooterAppVendor("Lime");

        // then
        expect(lime.vendor()).toBe(true)
        
    });

    test('Checking app vendor', function () {
        // given
        const dott = new ScooterAppVendor("Dott");

        // then
        expect(dott.vendor()).toBe(true)
        
    });

    test('Checking app vendor', function () {
        // given
        const tier = new ScooterAppVendor("Tier");

        // then
        expect(tier.vendor()).toBe(true)
        
    });

});
