const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const { User } = require('../models/Users');
const validator = require("email-validator");
require("dotenv").config();

let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.GMAIL_ADDRESS,
        pass : process.env.GMAIL_PASS
    }

});

/* GET users listing. */
let response = null;
router.post('/create', async function (req, res, next) {
    response = res;
    try {
        const {username,password,email_id,role_id} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        validateEmail(email_id)
        await checkForEmail(email_id)

        const [user, created] = await User.findOrCreate(
            {
                where: {username},
                defaults: {
                    username,
                    password: hashedPassword,
                    email_id,
                    role_id,
                    confirmed: 0
                }
            }
        );

        if (!created){
            const msg = {
                status : 409,
                message: "username already taken"
            }
            res.status(409).json(msg)
        }else {
            // const userForJwt = {user_id,username,role_id}
            // const accessToken = generateAccessToken(userForJwt)
            await sendEmail(user)
            // res.json({...userForJwt, accessToken})
        }
    } catch(err) {
        console.log(err)
        res.status(500).send()
    }

});
// verify token and make secret perm
async function sendEmail(user) {
    // process.env.CLIENT_URL/authentication/activate/${token}
    const token = generateActivationToken(user['user_id'])
    let mailOptions = {
        from: 'mhdprogrammer911@gmail.com',
        to: user['email_id'],
        subject: 'Exam Portal account activation',
        html: `Please click this email to confirm your email:
               <a herf="${token}>${token}</a>`
    }
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("error happened")
            response.status(501).json({
                status: 501,
                message: err.message
            })
        } else {
            response.json({
                message: "check your email to activate your account!"
            })
        }
    })
    // updating email_token in db
    await user.update({email_token: token})
}

function validateEmail(email) {
    if (!validator.validate(email)){
        const msg = {
            status : 409,
            message: "invalid email address!"
        }
        response.status(409).json(msg)
    }

}
async function checkForEmail(email) {
    const user = await User.findOne({ where: { email_id: email } });
    console.log(user)
    if (user !== null){
        const msg = {
            status : 409,
            message: "email address already taken by another user!"
        }
        response.status(409).json(msg)
    }
}

function generateAccessToken(user) {
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '15min'})
}

function generateActivationToken(user_id) {
    return jwt.sign({user_id},process.env.JWT_ACTIVATION_EMAIL,{expiresIn: '30min'})
}
module.exports = router;