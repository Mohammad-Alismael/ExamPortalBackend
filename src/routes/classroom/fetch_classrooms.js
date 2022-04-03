const express = require('express');
const {authorize} = require("../../middleware/autherization");
const {Classroom} = require("../../models/Classroom");
const router = express.Router();

/* GET home page. */
router.get('/classes', authorize, async function (req, res, next) {
    const {user_id, role_id} = req
    if (role_id == 3) {
        // fetching from classroom
        const { count, rows } = await Classroom.findAndCountAll({where: {instructor_id: user_id}})
        const result = []
        for (const classroom of rows) {
            result.push(classroom['dataValues'])
        }
        res.json( {result})
    }else {

    }
});

module.exports = router;