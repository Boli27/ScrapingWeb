const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Property = sequelize.define('Property', {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    source: { // De dónde viene el dato (Finca Raíz, Amorel, etc.)
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = {Property};
