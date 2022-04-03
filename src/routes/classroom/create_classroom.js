const express = require('express');
const router = express.Router();
const {authorize} = require('../../middleware/autherization');
const {Classroom} = require("../../models/Classroom");

router.post('/create',authorize,async function (req, res, next) {
    const {class_name} = req.body;
    const [classroom, created] = await Classroom.findOrCreate({
        where: {instructor_id : req.user_id, class_name },
        defaults: {
            instructor_id : req.user_id,
            class_name
        }
    })
    if (!created){
        res.json({message: `you already have classroom named ${class_name}`});
    }else {
        res.json({message: `classroom created successfully!`});
    }

});

module.exports = router;