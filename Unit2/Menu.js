const {sequelize, DataTypes, Model} = require('./Sequelize_index');
const { MenuItem } = require('./MenuItem');
/**
 *  Menu
 */
class Menu extends Model {

}

Menu.init({
    title: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});


Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menu_id'});
MenuItem.belongsTo(Menu, {foreignKey: 'menu_id'});

module.exports = {
    Menu
};