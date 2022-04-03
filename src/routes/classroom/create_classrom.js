const express = require('express');
const router = express.Router();
const {authorizeForInstructor} = require('../../middleware/autherization')
const jwt = require("jsonwebtoken");
/* GET home page. */
router.post('/create',authorizeForInstructor,function(req, res, next) {
    res.json({ user_id: req.user_id});
});

module.exports = router;