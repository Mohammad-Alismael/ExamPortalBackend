// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('Exams', {
//     exam_id: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//       primaryKey: true
//     },
//     title: {
//       type: DataTypes.STRING(100),
//       allowNull: false
//     },
//     score: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     creator_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'users',
//         key: 'user_id'
//       }
//     },
//     starting_at: {
//       type: DataTypes.BIGINT,
//       allowNull: false
//     },
//     ending_at: {
//       type: DataTypes.BIGINT,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     tableName: 'Exams',
//     timestamps: true
//   });
// };
