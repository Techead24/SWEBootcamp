const {sequelize, DataTypes, Model} = require('./Sequelize_index');
const Menu = require('./Menu')
/**
 * Restaurant
 */
class Restaurant extends Model {


}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})


module.exports = Restaurant;