// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('user_answer_text', {
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
//     user_answer: {
//       type: DataTypes.STRING(250),
//       allowNull: true
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Users',
//         key: 'user_id'
//       }
//     }
//   }, {
//     sequelize,
//     tableName: 'user_answer_text',
//     timestamps: false
//   });
// };
