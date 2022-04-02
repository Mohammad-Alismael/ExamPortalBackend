// var DataTypes = require("sequelize").DataTypes;
// var _Announcements = require("./Announcements");
// var _Answer_key = require("./Answer_key");
// var _Classroom = require("./Classroom");
// var _Exams = require("./Exams");
// var _QuestionType = require("./QuestionType");
// var _Questions = require("./Questions");
// var _Role = require("./Role");
// var _SequelizeMeta = require("./SequelizeMeta");
// var _User_answer = require("./User_answer");
// var _Users = require("./Users");
// var _classroom_student = require("./classroom_student");
// var _notifications = require("./notifications");
// var _question_options = require("./question_options");
// var _user_answer_text = require("./user_answer_text");
//
// function initModels(sequelize) {
//   var Announcements = _Announcements(sequelize, DataTypes);
//   var Answer_key = _Answer_key(sequelize, DataTypes);
//   var Classroom = _Classroom(sequelize, DataTypes);
//   var Exams = _Exams(sequelize, DataTypes);
//   var QuestionType = _QuestionType(sequelize, DataTypes);
//   var Questions = _Questions(sequelize, DataTypes);
//   var Role = _Role(sequelize, DataTypes);
//   var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
//   var User_answer = _User_answer(sequelize, DataTypes);
//   var Users = _Users(sequelize, DataTypes);
//   var classroom_student = _classroom_student(sequelize, DataTypes);
//   var notifications = _notifications(sequelize, DataTypes);
//   var question_options = _question_options(sequelize, DataTypes);
//   var user_answer_text = _user_answer_text(sequelize, DataTypes);
//
//   Exams.belongsTo(users, { as: "creator", foreignKey: "creator_id"});
//   users.hasMany(Exams, { as: "Exams", foreignKey: "creator_id"});
//   notifications.belongsTo(Announcements, { as: "announcement", foreignKey: "announcement_id"});
//   Announcements.hasMany(notifications, { as: "notifications", foreignKey: "announcement_id"});
//   classroom_student.belongsTo(Classroom, { as: "classroom", foreignKey: "classroom_id"});
//   Classroom.hasMany(classroom_student, { as: "classroom_students", foreignKey: "classroom_id"});
//   Questions.belongsTo(Exams, { as: "exam", foreignKey: "exam_id"});
//   Exams.hasMany(Questions, { as: "Questions", foreignKey: "exam_id"});
//   Answer_key.belongsTo(Questions, { as: "question", foreignKey: "question_id"});
//   Questions.hasMany(Answer_key, { as: "Answer_keys", foreignKey: "question_id"});
//   User_answer.belongsTo(Questions, { as: "question", foreignKey: "question_id"});
//   Questions.hasMany(User_answer, { as: "User_answers", foreignKey: "question_id"});
//   user_answer_text.belongsTo(Questions, { as: "question", foreignKey: "question_id"});
//   Questions.hasMany(user_answer_text, { as: "user_answer_texts", foreignKey: "question_id"});
//   classroom_student.belongsTo(Users, { as: "student", foreignKey: "student_id"});
//   Users.hasMany(classroom_student, { as: "classroom_students", foreignKey: "student_id"});
//   user_answer_text.belongsTo(Users, { as: "user", foreignKey: "user_id"});
//   Users.hasMany(user_answer_text, { as: "user_answer_texts", foreignKey: "user_id"});
//   Announcements.belongsTo(users, { as: "instructor", foreignKey: "instructor_id"});
//   users.hasMany(Announcements, { as: "Announcements", foreignKey: "instructor_id"});
//   Classroom.belongsTo(users, { as: "instructor", foreignKey: "instructor_id"});
//   users.hasMany(Classroom, { as: "Classrooms", foreignKey: "instructor_id"});
//   Questions.belongsTo(users, { as: "creator_exam", foreignKey: "creator_exam_id"});
//   users.hasMany(Questions, { as: "Questions", foreignKey: "creator_exam_id"});
//   User_answer.belongsTo(users, { as: "user", foreignKey: "user_id"});
//   users.hasMany(User_answer, { as: "User_answers", foreignKey: "user_id"});
//   Questions.belongsTo(who_can_see, { as: "who_can_see_who_can_see", foreignKey: "who_can_see"});
//   who_can_see.hasMany(Questions, { as: "Questions", foreignKey: "who_can_see"});
//
//   return {
//     Announcements,
//     Answer_key,
//     Classroom,
//     Exams,
//     QuestionType,
//     Questions,
//     Role,
//     SequelizeMeta,
//     User_answer,
//     Users,
//     classroom_student,
//     notifications,
//     question_options,
//     user_answer_text,
//   };
// }
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
