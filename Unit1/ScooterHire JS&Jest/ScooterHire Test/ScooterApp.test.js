const ScooterApp = require('../ScooterApp');
const User = require('../User');

describe('defines a suite of tests for the Traveller class', function () { 

    test('profile logged in and connected', function () {
        // given
        const lime = new ScooterApp("london", "enfield", "enter username:", "enter password:", "20km covered", "choose payment method", )
        const uche = new User("Uche", 19121998, 23)
        uche.addUsers(uche)

        // then
        expect(uche.users).toContain(uche);
    });



