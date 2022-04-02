// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('User_answer', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'users',
//         key: 'user_id'
//       }
//     },
//     question_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Questions',
//         key: 'question_id'
//       }
//     },
//     user_answer: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     points: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     is_correct: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//     },
//     answered_at: {
//       type: DataTypes.BIGINT,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     tableName: 'User_answer',
//     timestamps: false
//   });
// };
