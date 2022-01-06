const Traveller = require('../Traveller')
const Bag = require('../Bag')


describe('defines a suite of tests for the Traveller class', function () { 

    test('has baggage', function () {
        // given
        const uche = new Traveller("uche");
        const ucheBag = new Bag(13);
        uche.addBags(ucheBag)

        // then
        expect(uche.bags).toContain(ucheBag);
    });

});