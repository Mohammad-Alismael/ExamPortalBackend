const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require("dotenv").config();
const { User } = require('../models/Users');
const { RefreshToken } = require('../models/refresh_tokens');
 const bcrypt = require("bcrypt");
 let response = null;
router.post('/auth', async function (req, res, next) {
    response = res;
    const {username, password} = req.body;
    const fetchUser = await User.findOne({
        where: {
            username,
        } })
    console.log(fetchUser)

    if (fetchUser === null){
        const msg = {
            status : 404,
            message: "user not found"
        }
        res.status(404).json(msg)
    }else {
        emailConformation(fetchUser)
        checkForPassword(password,fetchUser['password'],res)
        const user_id = fetchUser['user_id']
        const role_id = fetchUser['role_id']
        const jwtUser = {user_id, username, role_id}
        const accessToken = generateAccessToken(jwtUser)
        const refreshToken = jwt.sign(jwtUser, process.env.REFRESH_TOKEN_SECRET);
        await RefreshToken.create(
            {
                token: refreshToken
            }
        )
        res.json({accessToken, refreshToken})
    }
});
function emailConformation(user) {
    if (user['confirmed'] == 0){
        const msg = {
            message: "your email is not activated!"
        }
        response.json(msg)
    }
}
function checkForPassword(password,dbPassword,res){
    if (!bcrypt.compareSync(password, dbPassword)){
        const msg = {
            status : 403,
            message: "password incorrect!"
        }
        res.status(403).json(msg)
    }
}
function generateAccessToken(user) {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '15min'})
}
module.exports = router;