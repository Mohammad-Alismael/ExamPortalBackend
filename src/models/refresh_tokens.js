const { sequelize } = require('../configs/configDB');
const { DataTypes } = require("sequelize");
exports.RefreshToken = sequelize.define('refresh_tokens', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    token: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'refresh_tokens',
    timestamps: false
});