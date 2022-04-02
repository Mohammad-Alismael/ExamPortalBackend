// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('Answer_key', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     question_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Questions',
//         key: 'question_id'
//       }
//     },
//     correct_answer: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     tableName: 'Answer_key',
//     timestamps: false
//   });
// };
