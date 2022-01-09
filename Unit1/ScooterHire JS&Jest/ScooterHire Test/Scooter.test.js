const Scooter = require('../Scooter');

describe('if user is under the limit', function () { 

    test('checking speed limit', function () {
        // given
        const yellow = new Scooter(246810, 18);

        // then
        expect(yellow.isOverLimit()).toBe(true);
        
    });

});
