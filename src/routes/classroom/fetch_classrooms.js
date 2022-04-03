const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const {user_id,role_id} = req.body
    if (role_id == 3){
        // fetching from classroom
    }
    res.render('index', { title: 'Express' });
});

module.exports = router;