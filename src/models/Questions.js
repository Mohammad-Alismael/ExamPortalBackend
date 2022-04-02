// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('Questions', {
//     question_id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     question_type: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     creator_exam_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'users',
//         key: 'user_id'
//       }
//     },
//     question_text: {
//       type: DataTypes.STRING(250),
//       allowNull: false
//     },
//     points: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     exam_id: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//       references: {
//         model: 'Exams',
//         key: 'exam_id'
//       }
//     },
//     is_active: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     who_can_see: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'who_can_see',
//         key: 'id'
//       }
//     }
//   }, {
//     sequelize,
//     tableName: 'Questions',
//     timestamps: false
//   });
// };
