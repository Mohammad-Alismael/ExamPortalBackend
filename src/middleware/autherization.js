const jwt = require('jsonwebtoken');
require("dotenv").config();
exports.authorize = function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, data) =>{
        if (err) return res.status(403).json({message: 'invalid or expired token'})
        next()
    });
}

exports.authorizeForInstructor = function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, data) =>{
        if (err) return res.status(403).json({message: 'invalid or expired token'})
        const {user_id,role_id,} = data;
        if (role_id == 3){
            req.user_id = user_id;
            next()
        }else {
            res.status(401).json({message: 'you do not have permission!'})
        }
    });
}

exports.authorizeForStudents = function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err, data) =>{
        if (err) return res.status(403).json({message: 'invalid or expired token'})
        const {user_id,role_id,} = data;
        if (role_id !== 3){
            req.user_id = user_id;
            next()
        }
    });
}