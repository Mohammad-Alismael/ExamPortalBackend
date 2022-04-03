const { sequelize } = require('../configs/configDB');
const { DataTypes } = require("sequelize");
exports.Classroom = sequelize.define('Classroom', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    class_name: {
        type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'Classroom',
    timestamps: false
  });

