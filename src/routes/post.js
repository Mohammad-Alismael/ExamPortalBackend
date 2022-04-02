const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require("dotenv").config();

const posts = [
    {
        username : 'mhd',
        title: "title 1"
    },
    {
        username : 'mhd2',
        title: "title 2"
    },
    {
        username : 'ahmed',
        title: "title 3"
    }
]

/* GET users listing. */
router.post('/',authToken, function(req, res, next) {
    const username = req.body.username;
    res.json(posts.filter((post => post.username === req.user.username)))
});
function authToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) res.sendStatus(401)

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
module.exports = router;