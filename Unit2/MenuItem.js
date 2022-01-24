const {sequelize, DataTypes, Model} = require('./Sequelize_index');

/**
 * MenuItem
 */
class MenuItem extends Model {

    // add methods here

}
MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
}, {
    sequelize,
    timestamps: false,
});
module.exports = {
    MenuItem
};