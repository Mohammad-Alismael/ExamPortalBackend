const { sequelize } = require('../configs/configDB');
const { DataTypes } = require("sequelize");
exports.User = sequelize.define('user', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "username_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    email_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    confirmed : {
        type: DataTypes.TINYINT,
        default: 0
    },
    email_token: {
        type: DataTypes.STRING(256),
    },
    reset_token: {
        type: DataTypes.STRING(256),
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false
  });
