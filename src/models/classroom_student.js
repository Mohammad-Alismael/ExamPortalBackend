// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('classroom_student', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     classroom_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Classroom',
//         key: 'id'
//       }
//     },
//     student_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Users',
//         key: 'user_id'
//       }
//     }
//   }, {
//     sequelize,
//     tableName: 'classroom_student',
//     timestamps: false
//   });
// };
