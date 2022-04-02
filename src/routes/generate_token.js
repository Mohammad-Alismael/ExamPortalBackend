const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { RefreshToken } = require('../models/refresh_tokens')
/* GET users listing. */
router.post('/token', async (req, res) => {
    const refreshToken = req.body.token;
    const db_token = await RefreshToken.findOne({
        where:
            {token: refreshToken}
    });
    if (refreshToken == null) return res.sendStatus(401)
    // check if refresh token is stored in db
    if (db_token == null) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,  (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({username: user.username})

        if (saveToken(accessToken)) res.json({accessToken: accessToken})
        else res.status(500).json({status : 500, message: "error happened!"})
    })
})

async function saveToken(token) {
    const db_token = await RefreshToken.create({
        token
    })

    return db_token
}
function generateAccessToken(user) {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '15s'})

}
module.exports = router;