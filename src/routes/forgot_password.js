const express = require('express');
const router = express.Router();
const { User } = require('../models/Users');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.GMAIL_ADDRESS,
        pass : process.env.GMAIL_PASS
    }

});
/* GET home page. */
let response = null;
router.post('/forgot-password', async function (req, res, next) {
    response = res
    const {email_id} = req.body;
    const user = await User.findOne({where: {email_id}})
    console.log(user)
    if (user !== null){
        const reset_token = generateResetToken({user_id: user['user_id']})
        // send url
        await sendEmail(user,reset_token).catch((e) => {
            console.log(e)
        })
        await user.update({reset_token})
        response.json({
            message: "check your email to reset your password!"
        })
    }else {
        res.status(404).json({message: "user not found!"})
    }

});
async function sendEmail(user,token) {
    // process.env.CLIENT_URL/user/reset/${token}
    let mailOptions = {
        from: 'mhdprogrammer911@gmail.com',
        to: user['email_id'],
        subject: 'Exam Portal reset password',
        html: `Please click this email to reset your password:
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
                message: "check your email to reset your password!"
            })
        }
    })

}
function generateResetToken(user) {
    return jwt.sign(user,process.env.JWT_FORGET_PASSWORD,{expiresIn: '30min'})
}
module.exports = router;