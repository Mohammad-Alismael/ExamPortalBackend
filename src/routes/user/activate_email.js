const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User } = require('../../models/Users');
require("dotenv").config();
/* GET home page. */
router.post('/activate', function(req, res, next) {
    const {email_token} = req.body;
    if (email_token == null) res.status(400).json({message: 'email token is not defined'})

    jwt.verify(email_token, process.env.JWT_ACTIVATION_EMAIL,async (err, data) => {
        if (err) return res.status(403).json({message: 'invalid or expired token'})
        const user_id = data['user_id']
        const user = await User.findOne({where: {user_id}});
        if (user == null) return res.status(403).json({message: 'incorrect token'})
        if (user['email_token'] === email_token){
            await user.update({confirmed: 1})
            return res.status(200).json({message: 'account activated successfully!'})
        }else {
            return res.status(403).json({message: 'incorrect token'})
        }
    })
});
function generateAccessToken(user) {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '15min'})
}
module.exports = router;