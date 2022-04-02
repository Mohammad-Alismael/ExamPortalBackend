// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('notifications', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     announcement_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Announcements',
//         key: 'id'
//       }
//     },
//     seen: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//       comment: "0 not seen\n1 seen"
//     },
//     student_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     tableName: 'notifications',
//     timestamps: false
//   });
// };
