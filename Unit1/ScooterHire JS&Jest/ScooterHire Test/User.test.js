
const User = require('../User')

describe('if the user meets the age requirement and correct details', function () { 

    test('user details', function () {
        // given
        const uche = new User ("Uche", 19121998, 23);

        // then
        expect(uche.age).toBe(23);
        expect(uche.name).toMatch("Uche")
        expect(uche.DOB).toBe(19121998)
    });


    test('older than 17', function () {
        // given
        const uche = new User ("Uche", 19121998, 23);

        // then
        expect(uche.checkAge()).toBe(true);
    });


    test('older than 17', function () {
        // given
        const uche = new User ("Uche", 19121998, 14);

        // then
        expect(uche.checkAge()).toBe(false);
    });
});
