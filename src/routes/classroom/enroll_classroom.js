const express = require('express');
const {authorize} = require("../../middleware/autherization");
const {Classroom} = require("../../models/Classroom");
const {classroomStudents} = require("../../models/classroom_student")
const router = express.Router();

/* GET home page. */
router.post('/enroll', authorize,async function (req, res, next) {
    const {classroom_id} = req.body
    const classroom = await Classroom.findByPk(classroom_id)
    if (classroom == null){
        res.json({message: "classroom does not exist!"})
    }else {
        if (req.role_id !== 3){
            const [classroomStudent,created] = await classroomStudents.findOrCreate({
                where : {classroom_id,student_id: req.user_id},
                defaults: {
                    classroom_id,
                    student_id: req.user_id
                }
            })

            if (!created){
                res.json({message: "you have already enrolled to this class"})
            }else {
                const class_name = classroom[0]['dataValues']['class_name']
                res.json(
                    {message: `you have enrolled to ${class_name} successfully!`}
                )

            }
        }else {
            res.json(
                {message: `you can not enroll because your the instructor!`}
            )
        }
    }
    res.render('index', {title: 'Express'});
});

module.exports = router;