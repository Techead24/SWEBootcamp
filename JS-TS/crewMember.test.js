// const { expect } = require('@jest/globals');

const crewMember = require('../crewMember');

describe('defines a suite of tests for the crewMember class', function () {
    
    test('has correct crew member details', function () {
        //given
        const linda = new crewMember("Linda", "Pilot", 1)
        
        //then
        expect(linda.staffNumber).toBe(1);
        expect(linda.position).toBe("Pilot")
        expect(linda.name).toMatch("Linda")
    
    });

});
