const Passenger = require('../Passenger')


describe('defines a suite of tests for the Passenger class', function () {
    
    test('has correct passenger details', function () {
        //given
        const uche = new Passenger("34C", "246810AB", "uche")

        
        //then
        expect(uche.seatNumber).toMatch("34C")
        expect(uche.name).toMatch("uche")

    });

});
