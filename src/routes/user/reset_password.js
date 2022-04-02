const express = require('express');
const router = express.Router();
const { User } = require('../../models/Users');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

router.post('/reset-password', async function (req, res, next) {
    const {reset_token, new_password} = req.body;

    jwt.verify(reset_token,process.env.JWT_FORGET_PASSWORD,async (error, data) => {
        if (error) {
            return res.status(401).json({
                message: "Incorrect token or it is expired!"
            })
        }
        const user = await User.findOne({where: {reset_token}})
        console.log(user)
        if (user == null) res.status(404).json({message: "User with this token does not exist!"})
        const hashedPassword = await bcrypt.hash(new_password, 10)
        console.log(hashedPassword)
        await user.update({password: hashedPassword},{ where: { user_id: user['user_id'] } })
        res.json({message: "password updated successfully!"})

    })

});

module.exports = router;