const {sequelize} = require('../Sequelize_index');
const {Menu} = require('../Menu');
const { MenuItem } = require('../MenuItem');

describe('Menu', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Menu', async () => {
        const menu = await Menu.create({ name: 'Christmas Menu' })
        expect(menu.id).toBe(1)
    })

    test('Menus have menu items', async () => {
        const menu = await Menu.create({ name: 'Christmas Menu' })
        const menuItem = await MenuItem.create({name: 'Fanta',price: 2});
        await menu.addMenuItem(menuItem);
        const menuItems = await menu.getMenuItems();
        expect(menuItems[0].price).toBe(2);
    })
})