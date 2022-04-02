// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('Announcements', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     instructor_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'users',
//         key: 'user_id'
//       }
//     },
//     announcement_text: {
//       type: DataTypes.STRING(250),
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     tableName: 'Announcements',
//     timestamps: true
//   });
// };
